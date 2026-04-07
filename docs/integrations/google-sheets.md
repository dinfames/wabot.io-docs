---
title: Google Sheets Integration
sidebar_position: 2
---

# Google Sheets Integration

Connect Wabot with Google Spreadsheets to log contacts, orders, and conversation data automatically.

## Setup

1. Go to **Integrations → Google OAuth** and connect your Google account.
2. Once connected, the **Google Spreadsheets** card will show **Connected**.
3. Click **Settings** on the Google Spreadsheets card.

## Use Cases

- **Log new contacts** — every new WhatsApp contact gets a row in your sheet
- **Track orders** — automation actions write order data to a sheet
- **Export broadcast results** — log delivery status per contact
- **CRM sync** — keep a simple CRM in Google Sheets updated by Wabot

## Using in Automations

When building an Automation, add an **Update Google Sheet** action:

1. Select the connected Google account.
2. Pick the spreadsheet and sheet tab.
3. Choose action: **Append Row** or **Update Row**.
4. Map fields: column A = `{phone}`, column B = `{name}`, column C = `{date}`, etc.

---

**See also:** [Automation](/docs/features/automation) · [Integrations Overview](/docs/integrations/)
