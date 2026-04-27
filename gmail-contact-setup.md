# Gmail Contact Form Setup (Google Apps Script)

This project now supports direct Gmail delivery through a Google Apps Script webhook.

## 1) Create Apps Script

1. Open https://script.google.com
2. Create a new project.
3. Replace the default code with:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents || '{}');

    var name = (data.name || '').toString().trim();
    var email = (data.email || '').toString().trim();
    var message = (data.message || '').toString().trim();
    var to = (data.to || Session.getActiveUser().getEmail() || '').toString().trim();

    if (!name || !email || !message || !to) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: 'Missing required fields' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var subject = 'New project inquiry from ' + name;
    var body = 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message;

    GmailApp.sendEmail(to, subject, body, {
      replyTo: email,
      name: 'ASAD Portfolio Contact Form'
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 2) Deploy Web App

1. Click Deploy -> New deployment.
2. Type: Web app.
3. Execute as: Me.
4. Who has access: Anyone.
5. Click Deploy and authorize permissions.
6. Copy the Web app URL.

## 3) Paste endpoint into this project

Open `app.js` and set:

```javascript
const GOOGLE_SCRIPT_ENDPOINT = 'PASTE_YOUR_WEB_APP_URL_HERE';
```

## 4) Test

1. Open your site.
2. Submit the contact form.
3. Confirm email arrives in your Gmail inbox.

## Notes

- The app now tries Google Apps Script first.
- If not configured or if it fails, it automatically falls back to FormSubmit.
- If FormSubmit asks for activation, verify the first activation email once.
