/*
 * C&L TRUCK EXPRESS — hosting-independent form configuration.
 *
 * To enable inquiries, paste a trusted HTTPS form endpoint below (or use a
 * same-origin API URL such as '/api/contact'). The endpoint must accept a
 * multipart/form-data POST, return HTTP 2xx on acceptance, and permit browser
 * CORS requests if hosted on another origin. See FORM_SETUP.md.
 *
 * NEVER place server API keys, email passwords, or other secrets in this file.
 * With an empty endpoint the website displays an honest configuration message.
 */
window.CL_TRUCK_EXPRESS_CONFIG = Object.freeze({
  formEndpoint: ''
});
