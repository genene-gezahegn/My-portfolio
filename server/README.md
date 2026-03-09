# Portfolio Backend Server

Simple Express server for handling contact form submissions.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Gmail app password (not your regular password)

### Getting Gmail App Password

1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → App Passwords
4. Generate new app password
5. Copy and paste into `.env`

## Running

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## API Endpoints

### POST /api/contact
Send contact form data

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

Response:
```json
{
  "message": "Email sent successfully"
}
```

### GET /api/health
Health check endpoint

## Deployment

Can be deployed to:
- Vercel (serverless functions)
- Heroku
- Railway
- DigitalOcean

## Note

For production, consider using a dedicated email service like:
- SendGrid
- Mailgun
- AWS SES
