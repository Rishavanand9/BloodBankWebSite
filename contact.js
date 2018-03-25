
  var config = {
    apiKey: "AIzaSyCS-jft1hku9lBf8gctwxFSm2DRasVIfxA",
    authDomain: "bloodbankapp-9974c.firebaseapp.com",
    databaseURL: "https://bloodbankapp-9974c.firebaseio.com",
    projectId: "bloodbankapp-9974c",
    storageBucket: "bloodbankapp-9974c.appspot.com",
    messagingSenderId: "264602847870"
  };
  firebase.initializeApp(config);


// Reference messages collection
var messagesRef = firebase.database().ref('Feedback');

// Listen for form submit
document.getElementById('form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var ph = getInputVal('ph');
  var msg= getInputVal('msg');

  // Save message
  saveMessage(fname, lname, email, ph, msg);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, email, ph, msg){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    email:email,
    ph:ph,
    msg:msg
  });
}