# Security Policy

## Supported Versions

Currently, only the latest version of the application is supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.0   | :white_check_mark: |
| < 1.0.0 | :x:                |

## Reporting a Vulnerability

We take the security of this project very seriously. If you discover a security vulnerability within this project, please follow these steps to report it:

1. **Do not disclose the vulnerability publicly.** This gives us time to investigate and resolve the issue before it can be exploited.
2. **Send an email** to the project maintainer with the details of the vulnerability. Include:
   - A detailed description of the vulnerability.
   - Steps to reproduce the issue.
   - Potential impact if the vulnerability is exploited.
   - Any proof of concept (PoC) code, if applicable.

### Response Timeline
- We will acknowledge receipt of your vulnerability report within 48 hours.
- We aim to resolve all critical vulnerabilities within 7 days of confirmation.
- Once the vulnerability is patched, you will be notified, and if you wish, you will be credited in our changelog for the discovery.

## Security Best Practices
- **Dependencies:** We actively monitor our npm dependencies for known vulnerabilities and update them regularly.
- **Environment Variables:** Never commit `.env` files or hardcoded credentials to the repository.
- **Database:** SQLite databases should have strict file permissions in production environments.

Thank you for helping keep this project secure!
