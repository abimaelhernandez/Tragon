const app = require('./config.js');
const admin = require("firebase-admin");

const port = (process.env.PORT || 3000);

admin.initializeApp({
  credential: admin.credential.cert({
    project_id: "tragon-8e6ce",
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: process.env.databaseURL
});

app.listen(port, function() {
  console.log(`Listening on Port ${port}`);
});
