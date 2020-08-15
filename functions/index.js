// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.addUser = functions.https.onRequest(async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  //creating a new user
  admin
    .auth()
    .createUser({
      email,
      password,
    })
    .then(function (userRecord) {
      //sending back the record
      res.json({ user_id: userRecord.uid });
    })
    .catch(function (error) {
      //sending the error back
      res.json({ error: error });
    });
});

//get all users
exports.listUsers = functions.https.onRequest(async (req, res) => {
  let users;

  admin
    .auth()
    .listUsers(100)
    .then((userRecords) => {
      res.json(userRecords);
    })
    .catch((error) => console.log("error is here: ", error));
});

//delete specific user
exports.deleteUser = functions.https.onRequest(async (req, res) => {
  admin
    .auth()
    .deleteUser(req.query.uid)
    .then(function () {
      console.log("Successfully deleted user");
    })
    .catch(function (error) {
      console.log("Error deleting user:", error);
    });
});
