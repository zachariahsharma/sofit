const table = document.querySelector('#table');
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
console.log(localStorage.getItem('People Coming').split(','));
localStorage.getItem('People Coming').split(',').forEach((person) => {
    db.collection('Users').doc(`${person}`).collection('Accepted Invitations').doc(`${localStorage.getItem('id')}`).get().then((doc) => {
        if(doc.data() === undefined) {
            db.collection('Users').doc(`${person}`).collection('Invited Exercises').doc(`${localStorage.getItem('id')}`).get().then((dork) => {
                console.log(localStorage.getItem('id'));
                if(dork.data() === undefined) { 
                    table.innerHTML += `
                    <tr>
                    <td>${person}</td>
                    <td>Rejected</td>
                    </tr>
                    ` 
                }else{
                    table.innerHTML += `
                    <tr>
                    <td>${person}</td>
                    <td>Pending</td>
                    </tr>
                    `
                }
            })
        }else{
            table.innerHTML += `
            <tr>
            <td>${person}</td>
            <td>Accepted</td>
            </tr>
            `
        }
    });
})