
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

exports.setAdminOnCreation = functions.auth.user().onCreate(async (user) => {
  const email = user.email;

  const admins = (await admin.firestore().collection("config").doc("admins").get()).data().admins;
  if (admins.includes(email)) {
    admin.auth().setCustomUserClaims(user.uid, {admin: true});
  }
})

exports.setAdminsOnConfigUpdate = functions.firestore.document('config/admins').onWrite(async (change, context) => {
  const admins = change.after.data().admins;

  listUsers = (nextPageToken) => {
    admin.auth().listUsers(1000, nextPageToken).then(listResult => {
      listResult.users.forEach(record => {
        const json = record.toJSON();
        if (admins.includes(json.email)) {
          admin.auth().setCustomUserClaims(json.uid, {admin: true});
        }
        else {
          admin.auth().setCustomUserClaims(json.uid, {});
        }
      })
      listUsers(listResult.pageToken);
    })
  }

  listUsers();
})
