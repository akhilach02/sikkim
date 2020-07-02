var firebaseConfig = {
    apiKey: "AIzaSyCgW1XkivI_JdUC7NO9baMVtsLaVeXHT5g",
    authDomain: "rch5-83d47.firebaseapp.com",
    databaseURL: "https://rch5-83d47.firebaseio.com",
    projectId: "rch5-83d47",
    storageBucket: "rch5-83d47.appspot.com",
    messagingSenderId: "703615226990",
    appId: "1:703615226990:web:9a72e66a624fbeaa9c027f",
    measurementId: "G-0GMH3QWWEF"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  var database=firebase.database();
  function verifydetails(){
      var email=document.getElementById("email").value;
      var pwd=document.getElementById("pwd").value;
      console.log(email+pwd);
      var name=email.split("@");
      var ref=database.ref().child('/distusers');
      ref.once("value").then(function(snapshot){
          snapshot.forEach(function(childSnapshot) {
            if(name[0] == childSnapshot.key){
              localStorage.clear();
              localStorage.setItem('distcode',childSnapshot.val().distcode);
              window.location.href="dist.html";
          }
          else
            alert("verify your email address and password");
        });
      });
      
    }