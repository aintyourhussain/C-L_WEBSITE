(() => {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeMenu = () => {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    mobileNav.hidden = true;
  };
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      mobileNav.hidden = !open;
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  }
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
  const serviceParam = new URLSearchParams(location.search).get('service');
  const select = document.querySelector('#service-type');
  if (serviceParam && select) {
    const match = Array.from(select.options).find(option => option.value.toLowerCase() === serviceParam.toLowerCase());
    if (match) select.value = match.value;
  }
  const form = document.querySelector('#inquiry-form');
  if (!form) return;

  const status = form.querySelector('#form-feedback');
  const submit = form.querySelector('button[type="submit"]');
  const originalButton = submit ? submit.innerHTML : '';
  const feedback = (message, type = 'error') => {
    if (!status) return;
    status.textContent = message;
    status.setAttribute('data-status', type);
  };

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    // A simple honeypot reduces casual spam; rate limits and spam protection
    // should also be enforced by the form service/backend.
    if (form.elements.namedItem('bot-field')?.value.trim()) return;

    const endpoint = String(window.CL_TRUCK_EXPRESS_CONFIG?.formEndpoint || '').trim();
    if (!endpoint) {
      feedback('This inquiry form is not connected to a delivery service yet. No message has been sent. Please call or email us using the contact details on this page.');
      return;
    }

    let url;
    try { url = new URL(endpoint, window.location.href); }
    catch { feedback('The contact form is not configured correctly. No message was sent.'); return; }
    const devHttp = url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
    if ((url.protocol !== 'https:' && !devHttp) || url.username || url.password) {
      feedback('A secure HTTPS form service must be configured before messages can be sent.');
      return;
    }

    if (submit) {
      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      submit.textContent = 'Sending inquiry…';
    }
    feedback('Sending your inquiry…', 'progress');
    try {
      const response = await fetch(url.href, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        redirect: 'error'
      });
      if (!response.ok) throw new Error('Submission was not accepted');
      window.location.assign('thank-you.html');
    } catch {
      feedback('We could not confirm delivery. Please try again later or contact us by phone or email.');
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.removeAttribute('aria-busy');
        submit.innerHTML = originalButton;
      }
    }
  });
})();
