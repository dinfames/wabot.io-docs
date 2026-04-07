# Getting Started — Overview

Welcome to Wabot! This section walks you through everything you need to get your account up and running in under 15 minutes.

## What is Wabot?

Wabot.io is an all-in-one WhatsApp automation platform that lets you:

- Send transactional notifications (orders, bookings, payments)
- Broadcast marketing messages to contact lists
- Deploy AI chatbots that handle FAQs and close sales
- Build no-code automations triggered by webhooks or WhatsApp labels
- Manage conversations from a shared team inbox
- Set up keyword-based autoresponders

It connects to your WhatsApp via a **QR code scan** (like WhatsApp Web), or via the **Official WhatsApp Business API** (WABA) for larger businesses, or as a **WebChat widget** for website-only AI chatbots.

---

## How Wabot Works

```mermaid
flowchart LR
    A[Your website / store / form] -->|webhook or plugin| B[Wabot.io servers]
    B -->|sends via your WA number| C[Customer's WhatsApp]
    C -->|reply| B
    B -->|routes to| D[Live Chat / AI Chatbot / Automation]
```

1. A trigger happens — new order, form submission, scheduled broadcast, keyword received.
2. Wabot receives the event via plugin, webhook, API, or its own scheduler.
3. Wabot composes and sends the WhatsApp message through your linked number.
4. Replies come back into Wabot's Live Chat, AI chatbot, or automation engine.

---

## The Three Account Types

When you **Add Account** in Wabot, you pick one of three integration methods:

=== "Unofficial API (Popular)"

    **Best for:** Personal numbers, small to medium businesses.

    - Connect by scanning a QR code or pairing code
    - Quick setup — instant connection
    - Free to use
    - Standard WhatsApp features with flexible messaging
    - No pre-approved templates needed

=== "Official API"

    **Best for:** Large enterprises with verified WhatsApp Business accounts.

    - Uses the official Meta WhatsApp Business API (WABA)
    - Requires an access token from Meta
    - Advanced features and high message limits
    - Official Meta support
    - Requires pre-approved message templates

=== "WebChat"

    **Best for:** Website-only AI chatbots and widgets.

    - No WhatsApp connection required
    - AI Chatbot + widget + playground
    - Instant activation
    - Web-only conversations

---

## Ready to Start?

Follow these steps in order:

1. **[Sign Up & Login](signup.md)**
2. **[Dashboard Tour](dashboard.md)**
3. **[Connect Your WhatsApp Account](connect-account.md)**
4. **[Send Your First Message](first-message.md)**

Once done, explore the [Core Features](../features/index.md) section.
