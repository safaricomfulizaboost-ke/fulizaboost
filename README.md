# Fuliza Limit Boost

This repository hosts a simple fintech landing page with a modal for processing fee payment via M-Pesa.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm run dev  # requires nodemon, restarts on file changes
   # or
   npm start
   ```
3. Open http://localhost:3000 in your browser.

## API

### POST /api/mpesa/request
Accepts JSON body:
```json
{
  "idNumber": "12345678",
  "phone": "0712345678",
  "amount": "5000",
  "fee": "150"
}
```
Server will try to forward the request to M-Pesa using an API key provided via the `MPESA_API_KEY` environment variable (or the hard‑coded key `pk_live_19caaea5b3f865073305c366d05254d3f50bcf1a` for testing).

The handler in `server.js` currently contains a placeholder implementation; update it with your real M-Pesa endpoint and logic.

Set the environment variable before starting the server:

```bash
export MPESA_API_KEY="pk_live_19caaea5b3f865073305c366d05254d3f50bcf1a"
# on Windows PowerShell:
# $env:MPESA_API_KEY = "pk_live_19caaea5b3f865073305c366d05254d3f50bcf1a"
```
