import { sendEmail } from "@netlify/emails";

await sendEmail({
  from: "",
  to: "",
  subject: "",
  template: "contact",
  parameters: {
    nom: "", 
    prénom: "", 
    email: "", 
    message: ""
  },
});
