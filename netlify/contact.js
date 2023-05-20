await fetch(
  `${process.env.URL}/.netlify/functions/emails/contact`,
  {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
    },
    method: "POST",
    body: JSON.stringify({
      from: "",
      to: "",
      subject: "",
      parameters: {
        nom: "", 
        prénom: "", 
        email: "", 
        message: ""
      },
    }),
  }
);