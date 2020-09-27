const firebaseConfig = {
  apiKey: "AIzaSyDzDLA8fCZTnk_Knjtc4bZQ11qJOu91Y7k",
  authDomain: "travelx-mlh.firebaseapp.com",
  databaseURL: "https://travelx-mlh.firebaseio.com",
  projectId: "travelx-mlh",
  storageBucket: "travelx-mlh.appspot.com",
  messagingSenderId: "468663955049",
  appId: "1:468663955049:web:f79f2110d2c136cfb57cf8",
  measurementId: "G-PPQPJYHPKM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.database();

//grab form element
const form = document.querySelector("form");

//submit form and save content in firebase
form.onsubmit = (e) => {
  e.preventDefault();
  const formObj = new FormData(form);
  const title = formObj.get("title");
  const tags = formObj.get("tag");
  const content = formObj.get("content");

  //to-do: add userID dynamically
  rootRef = db.ref("posts/");
  rootRef.push({
    postTitle: title,
    postTags: tags,
    content: content,
  });
  form.reset();
};
