const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmail(to, subject, html) {
  const msg = {
    to,
    from: 'your-email@example.com',
    subject,
    html,
  }

  try {
    await sgMail.send(msg)
    console.log(`Email sent to ${to}`)
  } catch (error) {
    console.error(error)
  }
}
