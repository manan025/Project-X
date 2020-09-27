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
    window.location.assign("https://www.w3schools.com");
}

let user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.location = "/index.html"

        var user = firebase.auth().currentUser;

        if(user != null){

            var name = user.displayName;
            var pic = user.photoURL;
            console.log(name);
        }

    } else {

    }
});

function login(){

    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("Error : " + errorMessage);

        // ...
    });

    var user = firebase.auth().currentUser;

    if (user) {

    }

}
function logout(){
    firebase.auth().signOut();
}
