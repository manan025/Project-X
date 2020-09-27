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

postsRef = db.ref("posts/");

//retrieving data

postsRef.on("value", gotData, gotError);

function gotData(data) {
  var dataSet = data.val();
  var dataKeys = Object.keys(dataSet);

  for (var i = 0; i < dataKeys.length; i++) {
    var dataKey = dataKeys[i];

    var title = dataSet[dataKey].postTitle;
    var content = dataSet[dataKey].content;
    var countryTag = dataSet[dataKey].postCountryTag;
    var nameTag = dataSet[dataKey].postNameTag;
  }
}

function gotError(error) {
  console.log(error);
}

//grab form element
const form = document.querySelector("form");

//submit form and save content in firebase
form.onsubmit = (e) => {
  e.preventDefault();
  const formObj = new FormData(form);
  const title = formObj.get("title");
  const country_tag = formObj.get("country_tag");
  const name_tag = formObj.get("name_tag");
  const content = formObj.get("content");

  //to-do: add userID dynamically
  postsRef.push({
    postTitle: title,
    postNameTag: name_tag,
    postCountryTag: country_tag,
    content: content,
  });
  form.reset();
}

