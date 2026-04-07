---
title: Templates
sidebar_position: 7
---

# Templates

Templates are reusable message components that save you time and enforce consistency. Wabot supports **six template types**, each for a different use case.

## Where to Find It

Sidebar → **GENERAL → Templates** — `https://app.wabot.io/dashboard/templates`

## The Six Template Types

At the top of the Templates page, you see six cards with counts:

| Tab | Purpose | Available For |
|-----|---------|---------------|
| **Pre-Approved** | WABA pre-approved templates synced from Meta | Official API only |
| **Lists** | Interactive list messages (customer picks from a list) | Both APIs |
| **Buttons** | Quick-reply button messages | Both APIs |
| **Polls** | Multiple-choice polls | Both APIs |
| **Sequences** | Multi-step message sequences over time | Both APIs |
| **Quick Replies** | Canned responses for Live Chat agents | Both APIs |

Click a tab to switch views.

---

## Pre-Approved Templates (Official API only)

If you use the **Official WhatsApp Business API**, Meta requires you to pre-register message templates before you can send marketing messages. Wabot syncs these from your WABA.

**How to sync:**

1. Go to **Templates → Pre-Approved** tab.
2. In the **Select Account** dropdown, pick your Official API account.
3. Click **Sync**.
4. Wabot fetches all approved templates from Meta.
5. They appear in the list, ready to use in Broadcasts and Automations.

:::info Need to create a new template?
Template creation happens in **Meta Business Manager**, not in Wabot. Wabot only syncs templates that Meta has already approved. Once approved, they become available here.
:::

---

## Lists

Interactive list messages let customers tap a button and pick from a menu. Great for product catalogs, service menus, and multi-option replies.

**Structure:**

- **Header** (optional text)
- **Body text**
- **Footer text** (optional)
- **Button label** (e.g. "View Menu")
- **Sections** — group your options:
  - Section title (e.g. "Main Dishes")
  - Items — each with title, description, and unique ID

**How to create:**

1. **Templates → Lists → New List**.
2. Fill in header, body, and button label.
3. Add sections and items.
4. Save and use in Chatbots, Autoresponder replies, Broadcasts, or Automations.

---

## Buttons

Quick-reply button messages show 1–3 clickable buttons.

**Structure:**

- **Body text**
- **Footer** (optional)
- **Buttons** (1–3):
  - Label (what the button says)
  - Reply payload (what gets sent back when tapped)

**Use cases:**

- "Yes / No / Maybe" confirmations
- "Track Order / Contact Us / FAQ" menu
- "Book Now / Learn More" CTA

---

## Polls

Multiple-choice polls let customers vote on options. Great for feedback, event RSVPs, and product preferences.

**How to create:**

1. **Templates → Polls → New Poll**.
2. Enter the question (e.g. "Which flavor do you prefer?").
3. Add options (Chocolate, Vanilla, Strawberry, Matcha).
4. Choose single-select or multi-select.
5. Save and send via Broadcast or Automation.

Results aggregate automatically — view them in the poll's detail page.

---

## Sequences

Sequences are pre-built multi-step drip campaigns. Think of them as mini-automations you can attach to any trigger.

**Example — 5-day onboarding sequence:**

- **Day 0:** "Welcome! Here's your first tip."
- **Day 1:** "Tip #2 — did you try the feature from yesterday?"
- **Day 3:** "Case study — how a customer doubled sales."
- **Day 5:** "Special offer — 20% off for new subscribers."
- **Day 7:** "Last chance + testimonial."

**How to create:**

1. **Templates → Sequences → New Sequence**.
2. Name it (e.g. "Onboarding Drip").
3. Add steps with delays: `+0d`, `+1d`, `+3d`, etc.
4. Each step is a message (text, media, buttons).
5. Save.
6. Attach the sequence to an Automation action: **Start Sequence → Onboarding Drip**.

---

## Quick Replies

Quick Replies are canned responses for human agents in **Live Chat**. Unlike the other template types, these are never sent automatically — they're inserted manually by agents.

**Example quick replies:**

- **greeting** → "Hi! Thanks for contacting us. How can I help?"
- **pricing** → "Our plans start at RM30/month. Full pricing at wabot.io/#pricing."
- **bank** → "Please transfer to Maybank 1234-5678-9012 (Team Fames Sdn Bhd). Send receipt here."
- **delivery** → "Your order will arrive within 3–5 working days via J&T Express."

**How to use in Live Chat:**

1. In any conversation, type `/` in the message box.
2. A list of quick replies appears — search by name.
3. Click one to insert.
4. Edit if needed, then send.

---

## Organizing Your Templates

Best practices:

- **Name them clearly** — "Greeting — Day Shift" not "Template 1"
- **Group by purpose** — sales, support, onboarding, offboarding
- **Review quarterly** — delete obsolete ones, update pricing/dates
- **Translate** — create Bahasa Melayu and English versions for bilingual teams

---

**See also:** [Broadcast](./broadcast) · [Live Chat](./live-chat) · [Automation](./automation)
