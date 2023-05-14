import sendEmail from 'utils/sendEmail.js'

exports.handler = async (event, context) => {
  const { data: contactData } = JSON.parse(event.body);

  const { nom, prenom, email, message } = contactData;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "association@ecolelamontgolfiere.fr",
    from: "association@ecolelamontgolfiere.fr",
    subject: "Nouvelle demande de renseignement",
    html: `
      <p>Une nouvelle demande de renseignement a été faite sur le site de l'école de la montgolfière</p>
      <p>Le Nom de la personne est : ${nom}</p>
      <p>Son Prénom est : ${prenom}</p>
      <p>Son adresse mail est: <a href="mailto:${email}">${email}</a></p>
      <p>Son Message est le suivant : ${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
