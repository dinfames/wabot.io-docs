---
title: Core Features
sidebar_position: 1
slug: /features/
---

# Core Features

Wabot bundles seven powerful capabilities into one unified dashboard. Each feature is independent but integrates smoothly with the others — you can chain a Chatbot into an Automation, route from an Autoresponder to Live Chat, and broadcast to segments created in Audience.

## The Seven Pillars

- **[Chatbots](/docs/features/chatbots)** — AI-powered bots that answer FAQs, qualify leads, and close sales 24/7.
- **[Broadcast](/docs/features/broadcast)** — Send bulk campaigns to contact groups or segments with scheduling.
- **[Automation](/docs/features/automation)** — Visual workflow builder triggered by webhooks or WhatsApp labels.
- **[Autoresponder](/docs/features/autoresponder)** — Keyword-based auto-replies for greetings, FAQs, and quick support.
- **[Live Chat](/docs/features/live-chat)** — Shared team inbox with filters: All, Unread, Widget, Chatbot Active/Inactive, Archived.
- **[Templates](/docs/features/templates)** — Reusable message components: pre-approved, lists, buttons, polls, sequences, quick replies.

## Choosing the Right Feature

| I want to... | Use this feature |
|--------------|------------------|
| Send a promotion to 500 contacts | **Broadcast** |
| Reply automatically to "harga" keyword | **Autoresponder** |
| Use AI to answer pricing questions | **Chatbots** |
| Trigger a message when a form is submitted | **Automation** (webhook trigger) |
| Follow up when a WhatsApp label changes | **Automation** (label trigger) |
| Let my team reply to customers together | **Live Chat** |
| Reuse pre-approved WABA message templates | **Templates → Pre-Approved** |
| Save canned responses for quick replies | **Templates → Quick Replies** |
| Send an interactive list of options | **Templates → Lists** |
| Send a button menu | **Templates → Buttons** |

---

## How Features Connect

```mermaid
graph TD
    Trigger[Trigger: Webhook / Label / Keyword / Schedule]
    Trigger --> Auto[Automation]
    Trigger --> Ar[Autoresponder]
    Trigger --> Bc[Broadcast]
    Auto --> Bot[Chatbot]
    Ar --> Bot
    Bot --> Live[Live Chat Handoff]
    Bc --> Live
    Auto --> Sheets[Google Sheets]
    Auto --> Wh[Webhook Out]
```

Click any feature in the sidebar to dive deeper.
