# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form on the website.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click on **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for Gmail accounts)
   - **Outlook** (for Outlook/Hotmail)
   - **Custom SMTP** (for other providers)
4. Follow the setup instructions for your chosen provider
5. After setup, you'll see a **Service ID** - copy this (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Click on **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Use the following template:

   **Template Name:** Contact Form Submission
   
   **Subject:** `Contact Form Submission from {{from_name}}`
   
   **Content:**
   ```
   You have received a new contact form submission:
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
   
4. In the **"To Email"** field, enter: `hello@ccalawyer.it.com`
5. In the template settings, set **Reply-To** to `{{reply_to}}` so you can reply directly to form submissions
6. Click **"Save"**
7. Copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Click on **"Account"** in the left sidebar
2. Go to **"General"** tab
3. Find **"Public Key"** and copy it (e.g., `abcdefghijklmnop`)

## Step 5: Update Configuration Files

### Update `emailjs-config.js`

Open `emailjs-config.js` and replace `YOUR_PUBLIC_KEY` with your actual Public Key:

```javascript
emailjs.init('YOUR_ACTUAL_PUBLIC_KEY_HERE');
```

### Update `script.js`

Open `script.js` and find this line (around line 120):

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Replace:
- `YOUR_SERVICE_ID` with your Service ID from Step 2
- `YOUR_TEMPLATE_ID` with your Template ID from Step 3

Example:
```javascript
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Step 6: Test the Form

1. Open `contact.html` in your browser
2. Fill out the contact form
3. Click "Send"
4. Check your email inbox (hello@ccalawyer.it.com) for the test message

## Troubleshooting

### Form shows "Email service not configured"
- Make sure EmailJS SDK is loaded (check browser console for errors)
- Verify `emailjs-config.js` is included in `contact.html`
- Check that your Public Key is correct

### Form shows error message
- Check browser console for detailed error messages
- Verify Service ID and Template ID are correct
- Make sure your email service is properly connected in EmailJS dashboard
- Check that the template variables match ({{from_name}}, {{from_email}}, {{message}})

### Emails not being received
- Check spam/junk folder
- Verify "To Email" in template is correct
- Check EmailJS dashboard > Activity for email logs
- Verify your email service connection in EmailJS

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

For higher limits, consider upgrading to a paid plan.

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

