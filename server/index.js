const app = require('./config.js');
// const admin = require('firebase-admin');

const port = (process.env.PORT || 3000);

/* admin.initializeApp({
  credential: admin.credential.cert({
    project_id: process.env.projectId,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: "https://tragon-8e6ce.firebaseio.com"
});
*/
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
