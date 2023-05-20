import fetch from 'node-fetch';

export default async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify('Payload required'),
    };
  }

  const { nom, prénom, email, message } = JSON.parse(event.body);

  const emailOptions = {
    from: 'association@ecolelamontgolfiere.fr',
    to: 'association@ecolelamontgolfiere.fr',
    subject: 'Nouvelle demande de contact',
    template: 'emails/contact/index.html', 
    parameters: {
      nom: nom,
      prénom: prénom,
      email: email,
      message: message,
    },
  };

  try {
    const response = await fetch(`${process.env.URL}/.netlify/functions/emails/contact`, {
      headers: {
        'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET,
      },
      method: 'POST',
      body: JSON.stringify(emailOptions),
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify('E-mail envoyé avec succès'),
      };
    } else {
      throw new Error("Une erreur s'est produite lors de l'envoi de l'e-mail");
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
}
