
function changeBold() {
    if (document.getElementById('textme').style.fontWeight != 'bold') {
        document.getElementById('textme').style.fontWeight = 'bold';
    } else {
        document.getElementById('textme').style.fontWeight = 'normal';

    }
}
function changeSty() {
    if (document.getElementById('textme').style.fontStyle != 'italic') {
        document.getElementById('textme').style.fontStyle = 'italic';
    } else {
        document.getElementById('textme').style.fontStyle = 'normal';

    }
}
function changeunder() {
    if (document.getElementById('textme').style.textDecoration != 'underline') {
        document.getElementById('textme').style.textDecoration = 'underline';
    } else {
        document.getElementById('textme').style.textDecoration = 'none';

    }
}
function changesize(){
    textme.style.fontSize=size.value;
}

function changePolice(){
    textme.style.fontFamily=police.value;
}

// $('.cb').click(function() {
//     $('.textmodal').modal();
//     ($('.cb'))
// })
$(".btn, .cb").click(function(){
    $('.textmodal').modal();
    ($('.btn'))
})


// firebase//
var firebaseConfig = {
    apiKey: "AIzaSyCVvfx5fws07fQC1hnYoiJTTBEsQxyRxCU",
    authDomain: "fir-gomycode-d4d78.firebaseapp.com",
    databaseURL: "https://fir-gomycode-d4d78.firebaseio.com",
    projectId: "fir-gomycode-d4d78",
    storageBucket: "fir-gomycode-d4d78.appspot.com",
    messagingSenderId: "130698168503",
    appId: "1:130698168503:web:ba70bedf1ee181ad38e532",
    measurementId: "G-X9LNR9LKFC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  var messagesRef = firebase.database().ref('myDatabase');//setting name of database
  function submitForm(e){
      e.preventDefault();
      //get values
      var name=document.getElementById('my-name').value;
      var email=document.getElementById('email').value;
      var phone=document.getElementById('my-phone').value;
    //   var message=document.getElementById('textme').value;
      saveMessage(name,email,phone);

  }
  document.getElementById('contactForm').addEventListener('submit',submitForm);
  function saveMessage(name,email,phone){
      var newMessageRef= messagesRef.push();
      newMessageRef.set({
          name: name,
          email: email,
          phone: phone,
      });
  }
