# C&L TRUCK EXPRESS — hosting-independent source code

This contains the editable **C&L TRUCK EXPRESS** website, using the approved
red/black/green branding. It is **not** the TYME2DISPATCH project and is not tied
to Netlify. The source is plain HTML, CSS, JavaScript, and local images.

## Pages
- `index.html` — Home
- `services.html` — Our Services
- `about.html` — About Us (Owner Operator Eugenia Black; Lead Dispatcher Mike Adam)
- `careers.html` — Careers (not currently hiring)
- `contact.html` — Contact, quote/inquiry form
- `privacy.html` — Privacy notice draft
- `thank-you.html` — Page shown after a successful configured form submission
- `404.html` — Optional not-found page

## Editing
Open this folder in VS Code. Edit each .html file directly. `styles.css` holds
the design, `app.js` holds navigation/form behavior, and `assets/` holds images.

## Local preview
Double-click `index.html` or, for a more reliable local preview, run:

    python -m http.server 8000

Then browse to http://localhost:8000/ . The form is disabled until you provide
an endpoint, so local preview will not send inquiries or show false success.

## Publish on any static host
Upload the *contents* of this folder to your site's public root:

- cPanel / Apache: upload contents to `public_html/`.
- Vercel: deploy as a static site, without a required framework/build step.
- Cloudflare Pages: static site, project directory as published output.
- GitHub Pages: publish this folder from the chosen branch (a custom domain is optional).
- Nginx or another static server: set the folder as the web root.

All internal links use relative .html paths. A custom 404 page and security
headers may require specific hosting configuration. Refer to SECURITY.md.

## Contact form — NOT enabled yet
`form-config.js` has an empty `formEndpoint` value by design. Follow FORM_SETUP.md
to connect a form provider or your own HTTPS backend. Without that, all pages
work except sending contact-form inquiries. The page still shows the real phone
and email links.

## Before going live
- Replace `dispatcher@example.com` (a placeholder) with Mike Adam's real email.
- Add the actual Facebook / Instagram page URLs.
- Confirm your business services, any marketing claims, hours and contact details.
- Approve and update the Privacy Notice to reflect your form provider.
- Apply HTTPS/security headers using your host's configuration.
- Test a real form submission and confirm it is received.
- A static review is not a penetration test or proof of backend security.
