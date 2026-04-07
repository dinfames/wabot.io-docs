# Wabot.io Documentation

[![Deploy](https://github.com/dinfames/wabot.io-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/dinfames/wabot.io-docs/actions/workflows/deploy.yml)

Complete bilingual (English + Bahasa Melayu) documentation and tutorial for **[Wabot.io](https://wabot.io)** — the all-in-one WhatsApp automation platform built by Team Fames Sdn Bhd.

**Live site:** https://dinfames.github.io/wabot.io-docs/

## What's inside

- **Getting Started** — sign up, dashboard tour, connect WhatsApp, first message
- **Core Features** — Chatbots, Broadcast, Automation, Autoresponder, Live Chat, Templates
- **Contacts** — Audience & Groups, Contacts management
- **Tools** — File Manager, Queue Message, Link Generator
- **Integrations** — Google Sheets, WordPress, Pabbly, Make, FunnelKit, Webhooks & API
- **Pricing & Plans** — comparison of Lite, Basic, Plus, Premier, Platinum
- **FAQ** — frequently asked questions
- **Panduan Bahasa Melayu** — BM version of the essential guides

## Local development

Requires Python 3.10+.

```bash
# Install
pip install mkdocs-material

# Serve locally at http://localhost:8000
mkdocs serve

# Build static site to ./site
mkdocs build
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds the site and deploys it to GitHub Pages.

## Contributing

1. Fork the repo
2. Create a branch (`git checkout -b docs/new-page`)
3. Edit markdown files in `docs/`
4. Commit and open a pull request

## License

Documentation content is provided as-is for users of Wabot.io. Wabot.io is a product of Team Fames Sdn Bhd (1359369-A), Malaysia. Not affiliated with WhatsApp Inc.
