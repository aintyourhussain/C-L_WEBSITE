# C&L TRUCK EXPRESS — connect the inquiry form

This package intentionally does **not** require Netlify Forms, PHP, or WordPress.
The inquiry form is provider-neutral and needs one form delivery endpoint.

## How to connect
1. Choose a trusted form processing provider, or implement your own API endpoint.
2. Configure the endpoint to accept multipart/form-data requests via HTTP POST.
3. If the endpoint runs on a different origin, enable CORS for your site.
4. Edit `form-config.js` and change the empty `formEndpoint` string to the
   form submission URL you were given, for example:

       window.CL_TRUCK_EXPRESS_CONFIG = Object.freeze({
         formEndpoint: 'https://formspree.io/f/REPLACE_WITH_YOUR_ID'
       });

   This example is a placeholder, **not** a functioning endpoint.
5. Deploy the site and submit a test freight inquiry from `contact.html`.
6. Verify the message in your provider's dashboard and notification inbox.
7. Configure rate limiting / spam filtering and confirm the privacy/retention
   policy and access control match your real practices.

The browser will redirect to `thank-you.html` only after an HTTP 2xx response.
If submission fails or there is no endpoint, it displays a clear error.

Do **not** store private API keys, passwords or email credentials in JavaScript.
Browser field limits and the honeypot help but do not replace server-side checks.
For localhost-only testing you can use an HTTP endpoint on 127.0.0.1. Public
production endpoints must use HTTPS.

You can also decide to skip the form entirely and direct visitors to the
existing `tel:+14124357721` and `mailto:EUGENIABLACK29@GMAIL.COM` links.
