# Broadcast

Broadcast lets you send the same message (or a personalized variant) to hundreds or thousands of contacts at once — perfect for promotions, product launches, newsletters, and event reminders.

## Where to Find It

Sidebar → **CORE → Broadcast**

URL: `https://app.wabot.io/dashboard/broadcast`

## The Broadcast List Page

When you open Broadcast, you see a table with columns:

- Broadcast name
- Account used
- Audience
- Status (Draft, Scheduled, Sending, Completed, Failed)
- Stats (sent / delivered / read / failed)
- Created date
- Actions (view, duplicate, delete)

At the top right: **Create** button.

---

## Creating a Broadcast

Click **Create** to open the 3-step wizard at `/dashboard/broadcast/new`.

### Step 1 — Choose Audience

Fill in:

1. **Broadcast Name \*** — an internal label (e.g. "March Promo Blast")
2. **Choose Your Accounts \*** — pick one of:
    - **Unofficial API** — standard WhatsApp features with flexible messaging
    - **Official API** — business verified with template requirements
3. **Select Accounts \*** — click to select the connected WhatsApp account(s)
4. **Select Your Audience \***:
    - **Contact Groups** — send to specific groups you've organized
    - **Segmented Subscriber** — target contacts based on behavior and profile data
5. **Include Groups \*** — choose groups to send to
6. **Exclude Groups (Optional)** — groups to exclude from sending

Click **Continue**.

### Step 2 — Create Message

- **Compose** your message text
- **Add media** (image, video, document, voice note)
- **Insert placeholders** like `{name}`, `{phone}`, custom fields from your contacts
- **Live Preview** panel on the right shows how the message will look
- Optionally attach **buttons** or **interactive lists** (if using Official API templates)

Click **Continue**.

### Step 3 — Set Schedule

- **Send Now** — dispatch immediately
- **Schedule** — pick a date and time (and optionally a timezone)
- **Pacing** — set how many messages per minute/hour to avoid WhatsApp rate limits

Review the summary and click **Send** (or **Schedule**).

---

## The Steps Sidebar

The wizard shows a **Steps** sidebar on the right with:

1. **Choose Audience** — Select accounts and target contacts
2. **Create Message** — Compose your broadcast content
3. **Set Schedule** — Choose when to send your message
4. **Progress** — e.g. `1 / 3`
5. **Live Preview** — Visual preview of your message

---

## Monitoring a Running Broadcast

After sending, the broadcast appears in the main list with its status:

- **Pending / Queued** — waiting to start
- **Sending** — dispatch in progress, shows `X / Y sent`
- **Completed** — all messages dispatched
- **Failed** — partial or total failure (check errors)

Click the broadcast row to view the detail page with:

- Per-contact delivery status
- Delivered / read / failed counts
- Error logs
- **Duplicate** button to clone and reuse
- **Export** to CSV

---

## Best Practices

!!! success "Do"

    - :white_check_mark: Get **explicit opt-in consent** before sending promotional messages
    - :white_check_mark: Start with small batches (50–100) before scaling to thousands
    - :white_check_mark: Segment by relevance — generic messages get blocked
    - :white_check_mark: Personalize with `{name}` and contextual fields
    - :white_check_mark: Send during business hours in the recipient's timezone
    - :white_check_mark: Include a clear CTA (reply, link, phone number)
    - :white_check_mark: Provide an opt-out ("reply STOP to unsubscribe")

!!! danger "Don't"

    - :x: Send unsolicited bulk messages — your number will get banned
    - :x: Exceed your plan's monthly message quota
    - :x: Use identical messages for thousands at once — vary slightly
    - :x: Blast the same list multiple times per week
    - :x: Include prohibited content (spam, scams, illegal products)

---

## Avoiding WhatsApp Bans

- Warm up new numbers gradually (start with 50 msgs/day, increase over 2 weeks)
- Keep message content relevant and useful
- Respond to replies quickly (don't leave customers hanging)
- Use Wabot's **pacing controls** to throttle send rate
- Monitor feedback — if replies contain "stop" or complaints, pause the broadcast

---

**See also:** [Audience & Groups](../contacts/audience.md) · [Contacts](../contacts/contacts.md) · [Templates](templates.md)
