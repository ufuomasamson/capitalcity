# Capital City Advocates Website

A professional website for Capital City Advocates, an estate planning law firm based in Arizona.

## Features

- **Homepage** with hero section, services, testimonials, and FAQ
- **About Page** with attorney information and background
- **Contact Page** with functional contact form
- Responsive design for all devices
- Modern UI with smooth animations

## Setup Instructions

### EmailJS Configuration (Contact Form)

The contact form uses EmailJS to send emails. Follow these steps to set it up:

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (200 emails/month free)

2. **Create an Email Service**
   - In EmailJS Dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy your **Service ID**

3. **Create an Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use this template structure:
     ```
     Subject: Contact Form Submission from {{from_name}}
     
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - Set the "To Email" field to: `hello@ccalawyer.it.com`
   - Copy your **Template ID**

4. **Get Your Public Key**
   - Go to "Account" > "General"
   - Copy your **Public Key**
   

5. **Update Configuration Files**
   - Open `emailjs-config.js`
   - Replace `YOUR_PUBLIC_KEY` with your actual Public Key
   - Open `script.js`
   - Find the line with `emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ...)`
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID

### Running the Website

Simply open `index.html` in a web browser. No build process required!

For local development, you can use a simple HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Project Structure

```
attorney/
├── index.html          # Homepage
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── emailjs-config.js   # EmailJS configuration
├── README.md           # This file
├── .gitignore          # Git ignore file
└── img/                # Image assets
    ├── cca-logo.png
    ├── hero1.jpg
    ├── about.jpg
    ├── contact.jpg
    └── ...
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- EmailJS (for contact form)

## Color Scheme

- Primary Color: `#4705a2`
- Secondary Color: `#ede9f3`

## Deployment

This is a static website that can be deployed to:

- **GitHub Pages** (free)
- **Netlify** (free)
- **Vercel** (free)
- **Any static hosting service**

## License

All rights reserved - Capital City Advocates

