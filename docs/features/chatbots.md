# Chatbots

Wabot Chatbots are AI-powered assistants that handle customer conversations on your WhatsApp number 24/7. They understand context, respond to text/images/voice, and seamlessly hand off to a human when needed.

## Where to Find It

Sidebar → **CORE → Chatbots**

URL: `https://app.wabot.io/dashboard/chatbots`

## Prerequisites

- At least one **connected WhatsApp account** (see [Connect Account](../getting-started/connect-account.md))
- AI credits in your plan (Plus = 3,000/mo, Premier = 10,000/mo, Platinum = 50,000/mo)

!!! info
    If no account is connected, you'll see *"No instances yet — Connect a WhatsApp account to start managing chatbots."*

---

## Creating a Chatbot

1. In **Chatbots**, select the WhatsApp account from the **All Account** dropdown at the top.
2. Click **Create Chatbot** (or **New Bot**).
3. Fill in the bot details:
    - **Name** — e.g. "Sales Assistant — Fashion Store"
    - **Description** — internal notes (optional)
    - **Language** — Bahasa Melayu, English, mixed, etc.
    - **Status** — Enabled / Disabled

## Training the Bot

Wabot chatbots are trained on **your own content**, not generic scripts. You can feed the bot:

=== "Knowledge Files"

    Upload documents that contain your FAQs, product info, and policies:

    - PDF (product catalogs, brochures)
    - DOCX (company manuals)
    - TXT (plain text FAQ lists)
    - Images (infographics, price lists)

    Files count toward your **Storage** quota shown on the Dashboard.

=== "Persona"

    Define the bot's tone and style:

    - **Name & role** — e.g. "Siti — Customer Service at XYZ Store"
    - **Tone** — friendly, professional, casual
    - **Language mix** — "mix Bahasa Melayu and English naturally"
    - **Do's & Don'ts** — what the bot should never say

=== "Scripted Flows"

    For specific scenarios (pricing, order tracking, appointment booking), define exact reply templates that the AI will use verbatim.

---

## Configuration

Once created, each chatbot has settings for:

- **Working hours** — 24/7 or only outside business hours
- **Trigger** — reply to every message or only specific keywords
- **Handover rules** — keywords like "speak to agent" that pause the bot and notify your team
- **AI credit budget** — monthly cap to prevent overspending
- **Auto-label** — tag conversations based on bot detection (e.g. `new-lead`, `pricing-inquiry`)

---

## Testing Before Going Live

1. Open the chatbot and click **Test Chat** (in-dashboard playground).
2. Type messages as if you were a customer.
3. Review replies — if incorrect, update your knowledge files or persona.
4. Send real messages from another phone to verify end-to-end delivery.

---

## Monitoring & Improvement

Once live, monitor your bot from:

- **Live Chat** → filter by **Chatbot Active** to see conversations being handled by the AI
- **Dashboard → AI Credits** card to track usage
- **Analytics** (if enabled) for conversation stats

Best practice: review conversations weekly, mark "bad" responses, and retrain with updated knowledge.

---

## AI Credits Usage

Each chatbot response consumes AI credits from your monthly quota:

| Plan | AI Credits / Month |
|------|---------------------|
| Lite | — (not included) |
| Basic | — (not included) |
| Plus | 3,000 |
| Premier | 10,000 |
| Platinum | 50,000 |

If you run out, you can:

- **Purchase** additional credits from the Dashboard → AI Credits card
- **Upgrade** your plan
- Enable **Advance credits** (overdraft, charged separately)

---

## Handover to Human

When a conversation needs human attention:

1. The bot detects a handover trigger (keyword like "human", "agent", or low confidence).
2. The conversation is tagged and surfaced in **Live Chat** under **Chatbot Inactive**.
3. Your team member clicks **Take Over** — the bot stops for that thread.
4. Reply normally. Re-enable the bot anytime by clicking **Hand Back to Bot**.

---

**See also:** [Live Chat](live-chat.md) · [Automation](automation.md) · [Templates](templates.md)
