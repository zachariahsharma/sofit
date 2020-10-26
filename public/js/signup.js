
// // Write Javascript code!
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const neighborhood = document.querySelector("#neighborhood");
const form = document.querySelector("#form");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTbG4Q4dgjviI7yKZQne0IE78W9wk0JeE",
  authDomain: "sofit-cc1f1.firebaseapp.com",
  databaseURL: "https://sofit-cc1f1.firebaseio.com",
  projectId: "sofit-cc1f1",
  storageBucket: "sofit-cc1f1.appspot.com",
  messagingSenderId: "641436990806",
  appId: "1:641436990806:web:5719e87b10df058c676af7",
  measurementId: "G-LVWFF4W39X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('hola');
  db.collection("Users").doc(`${email.value}`)
    .set({
      UserEmail: email.value,
      userPassword: password.value,
      whichNeighborhood: neighborhood.value
    })
    .then(function(docRef) {
      console.log("Document written ");
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});
