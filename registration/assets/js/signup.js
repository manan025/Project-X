var firebaseConfig = {
    apiKey: "AIzaSyDzDLA8fCZTnk_Knjtc4bZQ11qJOu91Y7k",
    authDomain: "travelx-mlh.firebaseapp.com",
    databaseURL: "https://travelx-mlh.firebaseio.com",
    projectId: "travelx-mlh",
    storageBucket: "travelx-mlh.appspot.com",
    messagingSenderId: "468663955049",
    appId: "1:468663955049:web:f79f2110d2c136cfb57cf8",
    measurementId: "G-PPQPJYHPKM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function bypass() {
    window.location.assign("url_here"); // Not to be implemented instead implement <a>
}


var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var name = document.getElementById("name").value;

function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error signing up: Error Code - " + errorCode + "\nProblem - "+ error.message);
        console.log(errorCode, errorMessage);
    });
}

const user = firebase.auth().currentUser;

if (user) {

    user.displayName = name;
    window.location = "/index.html";
} else {
    alert("Please re-enter your credentials to login.")
}
