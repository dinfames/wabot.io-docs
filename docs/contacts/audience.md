---
title: Audience & Groups
sidebar_position: 1
---

# Audience & Groups

Audience is where you organize contacts into groups for broadcasting and segmentation.

## Where to Find It

Sidebar → **GENERAL → Audience** — `https://app.wabot.io/dashboard/audience`

## Tabs

The page has two tabs:

### Contact Groups

A table listing all your groups:

| Column | Description |
|--------|-------------|
| **ID** | Auto-generated group ID (e.g. #50143) |
| **Group Name** | Your label (e.g. "Kelas FUM 21 Nov 2024") |
| **Total** | Number of contacts in the group |
| **Processing** | Contacts still being validated |
| **Valid** | Contacts with valid phone numbers |
| **Invalid** | Contacts with bad numbers |
| **Status** | Active / Inactive |
| **Actions** | Edit, delete, export |

### Subscribers

Contacts who subscribed via chatbot interactions, widgets, or opt-in links.

---

## Creating a Group

1. Click **Create Group** at the top right.
2. Enter a **Group Name** (e.g. "March Promo List").
3. Choose how to add contacts:
   - **Manual** — type phone numbers one by one
   - **Import CSV** — upload a CSV file with columns: `phone`, `name`, and optional custom fields
   - **Import from Google** — sync from Google Contacts (requires Google OAuth in Integrations)
4. Save.

Wabot validates each number and marks them as **Valid** or **Invalid**.

---

## Using Groups in Broadcasts

When creating a broadcast, at Step 1 (Choose Audience):

- **Include Groups** — pick one or more groups to send to
- **Exclude Groups** — optionally exclude specific groups (e.g. "Unsubscribed")

This lets you target precisely. For example: include "All Customers" but exclude "STOP" group.

---

## Best Practices

- Name groups descriptively: date, campaign, source (e.g. "Webinar 21 Nov 2024", "Website Leads Jan")
- Clean up invalid contacts periodically
- Create a **STOP** group for unsubscribed contacts and always exclude it from broadcasts
- Use **Segmented Subscriber** for dynamic targeting based on behavior

---

**See also:** [Contacts](/docs/contacts/all-contacts) · [Broadcast](/docs/features/broadcast)
