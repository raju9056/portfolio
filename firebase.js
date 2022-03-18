// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBZPheHWmwNlkwlOKRKZy1aXnWXCba_rc",
  authDomain: "contact-form-870b1.firebaseapp.com",
  databaseURL: "https://contact-form-870b1-default-rtdb.firebaseio.com",
  projectId: "contact-form-870b1",
  storageBucket: "contact-form-870b1.appspot.com",
  messagingSenderId: "258222467032",
  appId: "1:258222467032:web:7b160f0d7c1a1b5a3b74ad",
  measurementId: "G-2MKVQLZ4Y3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contact-Form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  //Get value
  var name = getInputVal("name");
  //   var company = getInputVal("phone");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");
  console.log(name, email, phone, message);
  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contact-Form").reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
}
