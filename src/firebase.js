import firebase from 'firebase';
import 'firebase/firestore'
const config = {
    // apiKey: "AIzaSyA5A2fVDEhks0d9kNo4mpgLeJvdNjr2WyI",
    // authDomain: "vue-firebase-project-58f14.firebaseapp.com",
    // databaseURL: "https://vue-firebase-project-58f14.firebaseio.com",
    // projectId: "vue-firebase-project-58f14",
    // storageBucket: "",
    // messagingSenderId: "757435681192",
    // appId: "1:757435681192:web:0cfea401350fb7af"
    apiKey: "AIzaSyA4KMHjwb7-A4aV8nQjw4S2RkxdZxaCx5M",
    authDomain: "fir-vue-up.firebaseapp.com",
    databaseURL: "https://fir-vue-up.firebaseio.com",
    projectId: "fir-vue-up",
    storageBucket: "",
    messagingSenderId: "190203993764",
    appId: "1:190203993764:web:8d051509612a73ce"
};
firebase.initializeApp(config)
var authFirebase = firebase.initializeApp(config, "secondary")
const firestore = firebase.firestore();
const resumeCollection = firestore.collection('resumes')

export { authFirebase, firebase, firestore, resumeCollection}