import { sendEmail } from "@netlify/emails";
exports.handler = async (event, context) => {

await sendEmail({
  from: "association@ecolelamontgolfiere.fr",
  to: "association@ecolelamontgolfiere.fr",
  subject: "Nouvelle demande de contact",
  template: "contact",
  parameters: {
    nom: "", 
    prénom: "", 
    email: "", 
    message: ""
  },
});
  return {
    statusCode: 200,
    body: "Email envoyé",
  }
}