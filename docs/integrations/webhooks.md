---
title: Webhooks & API
sidebar_position: 5
---

# Webhooks & API

For custom integrations, Wabot provides a REST API and webhook endpoints to send messages from any platform.

## API Endpoint

```
POST https://app.wabot.io/api/send
```

### Headers

```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### Request Body

```json
{
  "phone": "60123456789",
  "message": "Hi Ahmad, your order #1234 has been confirmed!"
}
```

### With Media

```json
{
  "phone": "60123456789",
  "message": "Here's your invoice.",
  "media_url": "https://example.com/invoice.pdf"
}
```

### Response

```json
{
  "success": true,
  "message_id": "abc123"
}
```

---

## Finding Your API Key

1. Log in to **app.wabot.io**.
2. Go to **Settings → API** (or check the Integrations page).
3. Copy your API key.

:::warning Keep your API key secret
Never expose it in client-side code, public repos, or logs.
:::

---

## Automation Webhooks

When you create an **Automation** with a **Webhook trigger**, Wabot generates a unique URL:

```
https://app.wabot.io/api/automation/webhook/YOUR_UNIQUE_ID
```

POST any JSON payload to this URL and the automation runs. All fields in the payload become available as `{field_name}` placeholders in your automation actions.

### Example: Google Forms → Wabot

1. Create an automation with Webhook trigger.
2. Copy the webhook URL.
3. In Google Forms, use Apps Script to POST form responses to the URL:

```javascript
function onFormSubmit(e) {
  var responses = e.namedValues;
  UrlFetchApp.fetch("https://app.wabot.io/api/automation/webhook/YOUR_ID", {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      phone: responses["Phone"][0],
      name: responses["Name"][0],
      message: "Thanks for registering, " + responses["Name"][0] + "!"
    })
  });
}
```

4. Set up a trigger in Apps Script: **Edit → Current project's triggers → On form submit**.

---

## Rate Limits

- Respect your plan's monthly message quota.
- Use pacing (don't fire thousands of API calls per second).
- If you get a `429 Too Many Requests` response, back off and retry after a delay.

---

**See also:** [Automation](/docs/features/automation) · [Integrations Overview](/docs/integrations/)
