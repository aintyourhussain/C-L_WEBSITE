# Security and hosting notes

The previous version had host-specific security headers. This universal source
code does not rely on those files. When moving hosting, **configure equivalent
headers on your new hosting platform**. Recommended starting points to validate
for your own deployment:

- `Content-Security-Policy` limiting scripts to 'self' and explicitly permitting
  the Google Fonts stylesheets/font resources the current design uses.
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY` or an equivalent CSP frame-ancestors restriction.
- `Strict-Transport-Security` only on domains that are fully HTTPS ready.
- Appropriate `Permissions-Policy` (disable features the site does not need).

CSP must be retested if you integrate external form providers, analytics,
media, or other remote resources. Hosting configuration determines whether
headers are actually delivered. **No server-side security is provided by
static HTML alone**. Test form spam/rate limiting, backend input validation,
response codes, access permissions, and notification delivery after launch.

Images and documents from `assets/` are public website assets; keep passwords,
private customer records, and API secrets outside this directory.
