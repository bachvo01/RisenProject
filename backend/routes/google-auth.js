const config = require('../config/google')
const passport = require('passport')
const express = require('express')
const router = express.Router()
const connection = require('../connection')
const { google } = require('googleapis')
// const fetch = require('node-fetch')
const cors = require('cors')

GOOGLE_CLIENT_ID = config.clientGoogleId
GOOGLE_CLIENT_SECRET = config.clientGoogleSecret

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  "http://localhost:5000/auth/google/handleGoogleRedirect" // server redirect url handler
);

router.get('/', (req, res) => {
  console.log(req)
})

router.post("/createAuthLink", cors(), (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile" 
    ],
    prompt: "consent",
    state: "GOOGLE_LOGIN"
  });
  console.log("server /auth/google/createAuthLink: ", url)
  res.json({ url });
});

router.get("/handleGoogleRedirect", async (req, res) => {
  // get code from url
  const code = req.query.code;
  console.log("server /auth/google/handleGoogleRedirect | code", code);
  // get access token
  oauth2Client.getToken(code, (err, tokens) => {
    if (err) {
      console.log("server /auth/google/handleGoogleRedirect | error", err);
      throw new Error("Issue with Login", err.message);
    }
    const accessToken = tokens.access_token;
    const refreshToken = tokens.refresh_token;

    res.redirect(
      `http://localhost:3000/user/signin?accessToken=${accessToken}&refreshToken=${refreshToken}`
    );
  });
});

router.post("/getValidToken", async (req, res) => {
  try {
    const request = await fetch("https://www.googleapis.com/oauth2/v4/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        refresh_token: req.body.refreshToken,
        grant_type: "refresh_token",
      }),
    });

    const data = await request.json();
    console.log("server /auth/google/getValidToken | data", data.access_token);

    res.json({
      accessToken: data.access_token,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
