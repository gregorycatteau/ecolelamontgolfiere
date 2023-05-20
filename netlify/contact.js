import fetch from 'node-fetch';

exports.handler = async function(event, context) {
  const { nom, prénom, email, message } = JSON.parse(event.body);

  const emailOptions = {
    from: "association@ecolelamontgolfiere.fr", // Adresse e-mail de l'expéditeur
    to: "association@ecolelamontgolfiere.fr", // Adresse e-mail du destinataire
    subject: "Nouvelle demande de contact",
    parameters: {
      name: nom,
      email: email,
      message: message
    }
  };

  try {
    const response = await fetch(`${process.env.URL}/.netlify/functions/emails/contact`, {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET
      },
      method: "POST",
      body: JSON.stringify(emailOptions)
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: "E-mail envoyé avec succès"
      };
    } else {
      throw new Error("Une erreur s'est produite lors de l'envoi de l'e-mail");
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message
    };
  }
};
