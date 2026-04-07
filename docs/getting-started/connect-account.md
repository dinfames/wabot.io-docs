# Connect Your WhatsApp Account

Before you can send messages, broadcast, or run chatbots, you need to connect at least one WhatsApp account to Wabot.

## Navigate to Accounts

1. In the sidebar, click **Accounts** (under GENERAL).
2. You'll see a list of your connected accounts. On a fresh account, you'll see: *"No WhatsApp accounts"*.
3. Click **Add Account** at the top right.

You'll land on the **Add Account** page with three integration methods.

---

## Choose Integration Method

=== "Unofficial API (Popular)"

    **Best for:** Personal numbers, small to medium businesses.

    **Features:**

    - :white_check_mark: Quick Setup
    - :white_check_mark: Personal Account
    - :white_check_mark: Instant Connection
    - :white_check_mark: Free to Use

    **How to connect:**

    1. Click the **Unofficial API** card.
    2. Enter a name for the account (e.g. "Main Sales Number").
    3. Click **Connect with QR Code** (or **Pairing Code**).
    4. A QR code appears on screen.
    5. On your phone, open **WhatsApp → Settings → Linked Devices → Link a Device**.
    6. Scan the QR code shown on Wabot.
    7. Wait until the status turns to **Connected / Online** in the dashboard.

    !!! tip
        Use a dedicated business number, not your personal WhatsApp. Once connected, Wabot runs the session on its own servers 24/7 — your phone doesn't need to stay online after the first scan.

=== "Official API"

    **Best for:** Large enterprises with verified WhatsApp Business accounts.

    **Features:**

    - :white_check_mark: Official & Secure
    - :white_check_mark: Advanced Features
    - :white_check_mark: High Message Limits
    - :white_check_mark: Official Meta Support

    **Requirements:**

    - Verified WhatsApp Business Account (WABA) with Meta
    - Access token from Meta Business Manager
    - Phone number ID
    - Pre-approved message templates (for marketing use)

    **How to connect:**

    1. Click the **Official API** card.
    2. Enter your WABA credentials:
        - Access Token
        - Phone Number ID
        - Business Account ID
    3. Click **Connect**.
    4. Wabot will verify and activate the account.
    5. Sync your pre-approved templates from **Templates → Pre-Approved → Sync**.

=== "WebChat"

    **Best for:** Website-only AI chatbots and widgets.

    **Features:**

    - :white_check_mark: No Setup Required
    - :white_check_mark: AI Chatbot & Widget
    - :white_check_mark: Instant Activation
    - :white_check_mark: Web Only

    **How to connect:**

    1. Click the **WebChat** card.
    2. Enter a name for the widget (e.g. "Website Sales Bot").
    3. Click **Create**.
    4. Copy the embed script and paste it into your website's `<head>` section.
    5. Customize the widget appearance in **Settings**.

---

## After Connecting

Once the account shows **Connected**:

- It appears in the **Accounts** list with a green status indicator.
- You can now use it in Chatbots, Broadcasts, Automations, and Live Chat.
- Manage its settings (name, profile picture, auto-reply) by clicking the account card.

## Managing Multiple Accounts

- Your plan determines how many WhatsApp numbers you can connect:
    - **Lite / Basic / Plus** → 1 number
    - **Premier** → 3 numbers
    - **Platinum** → 10 numbers
- Click **Add Account** again to connect additional numbers.
- Use the **All Accounts** dropdown on most pages to switch between them.

---

**Next:** [Send Your First Message →](first-message.md)
