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
      var i=1;
      var distid=document.getElementById('did').value;
      var scid=document.getElementById('sid').value;
      var ref=database.ref().child('/codes/districts/');
      ref.once('value',function(snap){
        snap.forEach(function(childs){
            if(childs.key==distid){
                var num=childs.numChildren();
                for(i=1;i<=num;i++){
                    if(childs.child(i).val()==scid){
                        localStorage.clear();
                        getSchoolName(scid);
                    }
                }
            }
        })
      })
  }
  function getSchoolName(scid){
    var sname="";
    var sref=database.ref().child('/codes/school/');
    sref.once('value',function(snap){
        sname=snap.child(scid).val();
        localStorage.setItem('schoolname',sname);
        window.location.href="prof.html";
    })
}