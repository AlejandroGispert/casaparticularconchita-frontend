const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// These id's and secrets should come from .env file.
const CLIENT_ID =
  "87654524398-q6e0ursh7r97k2admfdl7gjof5119jod.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04NXkHVn-MvvbCgYIARAAGAQSNwF-L9IrbcQnDeZ5pn5kESW49G7jTOXOO7xx9RzXeA0CXQW8AGdUPaLOQeJTh8Pva_FxmHqPs8Y";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "alejandrobusiness2022@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "Casa Particular Conchi <alejandrobusiness2022@gmail.com>",
      to: "alejandrogispert99@gmail.com",
      subject: "Hello from gmail using API",
      text: "Hello chico como estas, soy yo mismo ale",
      html: "<h1>Hello chico como estas, soy yo mismo ale</h1>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log("Email sent...", result))
  .catch((error) => console.log(error.message));
