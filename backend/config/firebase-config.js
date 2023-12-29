const admin = require("firebase-admin");

const serviceKey = require("../keys/explain-that-stuff-firebase-adminsdk-867zp-b334966c47.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceKey),
});

const db = admin.firestore();

module.exports = db;
