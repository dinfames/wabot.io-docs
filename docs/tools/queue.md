---
title: Queue Message
sidebar_position: 2
---

# Queue Message

View and manage all queued, scheduled, and in-flight messages across your account.

## Where to Find It

Sidebar → **CORE → Queue Message** — `https://app.wabot.io/dashboard/queue`

## Filters

At the top of the page:

- **Business API** (dropdown)
- **All Status** — Pending, Sending, Sent, Failed
- **All Instances** — filter by connected WhatsApp account
- **All Time** — date range filter

## What You See

A table listing every queued message with columns for status, recipient, scheduled time, and errors.

On a fresh account: *"No queue messages found — Try adjusting your filters or check back later."*

## Use Cases

- **Debug failed sends** — filter by "Failed" to see why messages didn't go through
- **Check scheduled broadcasts** — verify upcoming dispatch times
- **Monitor send rate** — see pacing in action for large broadcasts
- **Clear stuck messages** — cancel pending messages if needed

## Troubleshooting

If a message is stuck in **Pending** too long:

1. Check if the account is **Online** in Accounts.
2. Verify the recipient number is valid and in international format.
3. Check your plan's monthly quota — if exceeded, new messages queue indefinitely.
4. Contact support if the issue persists.
