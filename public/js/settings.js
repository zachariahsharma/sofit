const form = document.querySelector('#form')
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const neighborhood = document.querySelector('#neighborhood');
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
firebase.analytics();
var db = firebase.firestore();
if(localStorage.getItem('Person Logged in') === undefined || localStorage.getItem('Person Logged in') === null) {
    window.open('index.html', '_self')
}else {
    const person = localStorage.getItem('Person Logged in')
    console.log(person)
}
db.collection('Users').doc(`${person}`).get().then((doc) => {
    firstName.setAttribute('placeholder', doc.data().firstname);
    lastName.setAttribute('placeholder', doc.data().lastname)
    email.setAttribute('placeholder', doc.data().UserEmail)
    neighborhood.value = doc.data().whichNeighborhood
}).then(function() {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        doc.collection('Users').doc(`${person}`).set({
            firstname: firstName.value,
            lastname: lastName.value,
            email: email.value.toLowerCase(),
            neighborhood: neighborhood.value,
        })
    })
})