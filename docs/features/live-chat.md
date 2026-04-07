---
title: Live Chat
sidebar_position: 6
---

# Live Chat

Live Chat is Wabot's shared team inbox — a unified view of every WhatsApp conversation across all your connected accounts. Multiple agents can reply, take over from the AI, tag chats, and use canned responses.

## Where to Find It

Sidebar → **GENERAL → Live Chat** — `https://app.wabot.io/dashboard/live-chat`

![Live Chat Inbox](/img/screenshots/live-chat.png)

## Page Layout

When you open Live Chat, you see:

- **Left sidebar** — conversation list with filters
- **Main panel** — the selected conversation thread
- **Right sidebar** _(optional)_ — contact info, tags, notes

On an empty account, you'll see: *"No conversations found — Select a conversation from the sidebar to start chatting with your contacts."*

---

## Conversation Filters

At the top of the conversation list, you can filter by:

| Filter | What it shows |
|--------|---------------|
| **All** | Every conversation across all accounts |
| **Unread** | New messages you haven't seen |
| **Widget** | Conversations from WebChat widgets |
| **Chatbot Active** | Threads where the AI is currently responding |
| **Chatbot Inactive** | Threads that have been handed over to humans or never had bot active |
| **Archived** | Old conversations you've archived |

Use these to triage — check **Unread** first thing in the morning, then **Chatbot Inactive** for threads needing human attention.

---

## Replying to a Conversation

1. Click a thread in the conversation list.
2. The message history loads in the main panel (same thread the customer sees on WhatsApp).
3. Type your reply in the text box at the bottom.
4. Attach media (image, video, PDF, voice note) via the paperclip icon.
5. Press **Enter** or click **Send**.

The message goes out via the connected WhatsApp account — the customer sees it come from your business number, not from "Wabot".

---

## Key Actions per Conversation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="takeover" label="Take Over from Bot" default>

If a chatbot is handling the thread and you want to step in:

1. Click **Take Over** (or **Disable Bot**).
2. The AI stops responding for this thread.
3. Reply manually.
4. When done, click **Hand Back to Bot** to re-enable AI.

</TabItem>
<TabItem value="assign" label="Assign to Teammate">

Prevent two agents from replying over each other:

1. Click **Assign** in the conversation header.
2. Pick a teammate.
3. The thread is now owned by them (others see a lock icon).

</TabItem>
<TabItem value="tags" label="Add Tags / Labels">

Categorize conversations for reporting and filtering:

1. Click **Tags** (or the label icon).
2. Select or create a label: `new lead`, `VIP`, `pricing`, `support`, `closed`.
3. Labels carry over to automations and segments.

</TabItem>
<TabItem value="quickreplies" label="Use Quick Replies">

Insert pre-saved canned responses:

1. Click the **Quick Replies** icon or type `/` in the message box.
2. Browse your saved templates (from **Templates → Quick Replies**).
3. Click one to insert — edit if needed, then send.

</TabItem>
<TabItem value="resolve" label="Mark as Resolved">

Close a conversation when the customer's issue is solved:

1. Click **Mark as Resolved** (or **Close**).
2. The thread moves to the Archived filter.
3. Re-opens automatically if the customer replies again.

</TabItem>
<TabItem value="note" label="Add Note">

Internal notes only your team sees (not sent to the customer):

1. Click **Notes** in the right sidebar.
2. Type context: "Customer asked about refund on order #1234. Awaiting approval from finance."
3. Save. Other agents see this next time they open the thread.

</TabItem>
</Tabs>

---

## The Right Sidebar — Contact Info

When you click a conversation, the right sidebar shows:

- **Name & phone number**
- **Profile picture** (from WhatsApp)
- **Labels** currently applied
- **Groups** the contact is in
- **Custom fields** (email, company, order history)
- **Last seen**
- **Conversation history** across all accounts
- **Notes** (internal team notes)

You can edit contact info here — changes save to **Contacts**.

---

## Team Workflow Example

A typical customer-service setup:

1. **Morning standup** — team checks **Unread** filter, triages by urgency.
2. **Auto-assignment rules** — support team handles tags `support`, `bug`; sales handles `pricing`, `inquiry`.
3. **Bot handoff** — AI handles after-hours; humans take over from 9am.
4. **Resolution** — once resolved, mark as closed and add outcome tag (`won`, `lost`, `no-response`).
5. **Evening review** — check **Chatbot Active** to verify AI is doing well; add to training if gaps found.

---

## Mobile App

You can do all of this from your phone too:

- **iOS:** [App Store](https://apps.apple.com/my/app/wabot-io/id6758012842)
- **Android:** [Google Play](https://play.google.com/store/apps/details?id=com.wabotapps)

Same inbox, push notifications for new messages, hand-off control on the go.

---

**See also:** [Chatbots](./chatbots) · [Contacts](/docs/contacts/all-contacts) · [Templates](./templates)
