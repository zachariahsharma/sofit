const form = document.querySelector('#form');
const num = document.querySelector('#numO');
const name = document.querySelector('#name')
const date = document.querySelector('#date');
const time = document.querySelector('#time');

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
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let privateId=Math.floor(Math.random() * 1000)
    // console.log(privateId);
    // db.collection(`Private Exercises`).doc(`${privateId}`).set({
    //     name: `${name.value}`,
    //     nameid: `${privateId}`,
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ");
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
    let newform;
    let label;
    let input;
    let row;
    if(num.value > 0){
        form.remove()
        newform = document.createElement('form');
        let i;
        for(i = 0; i < Number(num.value); i++) {
            row = document.createElement('div')
            row.classList.add('row')
            label = document.createElement('label');
            label.textContent = 'Type the email of the person here'
            input = document.createElement('input')
            input.setAttribute('type', 'email')
            input.classList.add('people')
            label.appendChild(input)
            row.appendChild(label)
            newform.appendChild(row)
        }
        let submitbutton = document.createElement('button')
        submitbutton.textContent = 'Submit'
        submitbutton.setAttribute('type','submit')
        newform.appendChild(submitbutton)
        document.querySelector('#body').appendChild(newform)
        function HandlePeople(item) {
            db.collection('Users').doc(`${item.value}`).collection('Invited Exercises').doc(`${privateId}`).set({
                coming: false,
                time: Date.now(),
                createdby: localStorage.getItem('Person Logged in'),
                id: privateId,
                name: name.value,
                time: time.value,
                date: date.value,
            })
        }
        newform.addEventListener('submit', (e) => {
            e.preventDefault()
            people = document.querySelectorAll('.people')
            let i;
            people.forEach((element) => {
                console.log(element);
                HandlePeople(element)
            }).then(function() {
                window.open('privateExerciseConsole.html', '_self')
            })
        })
    }
})