---
title: Autoresponder
sidebar_position: 5
---

# Autoresponder

Autoresponder sends automatic replies based on keywords your customers type. Perfect for handling greetings, FAQs, pricing inquiries, and common questions without using AI credits.

## Where to Find It

Sidebar → **CORE → Autoresponder** — `https://app.wabot.io/dashboard/autoresponder`

## Prerequisites

You need at least one connected WhatsApp account. On a fresh account, you'll see: *"No WhatsApp accounts yet — Connect a WhatsApp account to configure autoresponder."*

## Page Layout

At the top of the Autoresponder page:

- **All Accounts** dropdown — filter by connected account
- **Apply to All** button — copy one set of rules across all accounts

Below, you define keyword → reply rules.

---

## How Autoresponder Works

1. A customer sends a message to your Wabot-connected number.
2. Wabot scans the message for your configured keywords.
3. If it matches, Wabot sends the pre-set reply automatically.
4. If no keyword matches, the message is passed to the **Chatbot** (if enabled) or lands in **Live Chat**.

---

## Creating a Rule

1. Click **Add Rule** (or **Create**).
2. Fill in:
   - **Keyword(s)** — comma-separated (e.g. `hi, hello, hai, helo`)
   - **Match type:**
     - **Exact** — entire message must equal the keyword
     - **Contains** — message contains the keyword anywhere
     - **Starts with** — message begins with the keyword
   - **Case sensitivity** — on/off
   - **Reply message** — the text to send back
   - **Media attachment** (optional) — image, PDF, etc.
   - **Next action** (optional):
     - Add a label to the contact
     - Add to a group
     - Trigger an automation
3. Save and enable the rule.

---

## Common Use Cases

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="greeting" label="Greeting" default>

**Keywords:** `hi, hello, hai, helo, assalamualaikum, waalaikumussalam`

**Match type:** Contains

**Reply:**
```
Hi! Selamat datang ke {store_name}.
Saya boleh bantu anda dengan:
1. Senarai produk — taip "produk"
2. Harga & promosi — taip "harga"
3. Lokasi & waktu — taip "lokasi"
4. Cakap dengan admin — taip "admin"
```

</TabItem>
<TabItem value="pricing" label="Pricing">

**Keywords:** `harga, price, berapa, cost, how much`

**Match type:** Contains

**Reply:** Attach your price list PDF + a short intro message.

</TabItem>
<TabItem value="hours" label="Office Hours">

**Keywords:** `waktu, jam, bila buka, opening, hours`

**Reply:**
```
Waktu operasi kami:
Isnin–Jumaat: 9 pagi – 6 petang
Sabtu: 9 pagi – 1 petang
Ahad: Tutup

Untuk tempahan luar waktu, sila ketuk "tempahan".
```

</TabItem>
<TabItem value="thanks" label="Thank You">

**Keywords:** `terima kasih, thanks, thank you, tq`

**Reply:**
```
Sama-sama! Jika ada sebarang soalan lain, sila beritahu kami. 😊
```

</TabItem>
<TabItem value="stop" label="Stop / Unsubscribe">

**Keywords:** `stop, unsubscribe, berhenti, sudah`

**Match type:** Exact

**Reply:**
```
Anda telah berhenti melanggan. Anda tidak akan menerima mesej dari kami lagi. Terima kasih.
```

**Next action:** Add label `unsubscribed` + remove from all broadcast groups.

</TabItem>
</Tabs>

---

## Autoresponder vs Chatbot

| Feature | Autoresponder | Chatbot |
|---------|---------------|---------|
| **Logic** | Exact keyword match | AI understanding |
| **Cost** | Free (no AI credits) | Uses AI credits |
| **Best for** | Simple, repetitive queries | Complex, context-aware replies |
| **Setup** | 2 minutes per rule | Upload docs, train persona |
| **Fallback** | Silent or pass to Chatbot | Handover to human |

**Recommendation:** Use **Autoresponder for quick wins** (greeting, pricing, hours) and **Chatbot for deeper conversations** (product recommendations, objection handling, closing sales).

---

## Priority Order

When a message arrives, Wabot processes it in this order:

1. **Autoresponder** — if a keyword matches, reply and stop
2. **Chatbot** — if enabled and no autoresponder triggered
3. **Live Chat** — if neither of the above responds, lands in human inbox

You can adjust this flow by disabling specific stages per account in **Settings**.

---

## Best Practices

- Start with 5–10 essential rules: greeting, pricing, location, hours, how to order, contact admin.
- Use **Contains** match for natural conversation, **Exact** for critical commands like "stop".
- Include a **menu** in your greeting reply so customers know what keywords to use.
- Keep replies short (under 500 characters) — mobile users skim.
- Test every rule by messaging your Wabot number from another phone.
- Review **Live Chat** weekly and add new rules based on what customers ask.

---

**See also:** [Chatbots](./chatbots) · [Live Chat](./live-chat) · [Automation](./automation)
