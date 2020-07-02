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
function verify(){
    console.log("entered");
    var schoolname="";
    var i=1;
    var distid=localStorage.getItem('distcode');
    var scid=document.getElementById('scid').value;
    console.log(distid+"   "+scid);
    var ref=database.ref().child('/codes/districts/'+distid+'/');
    var sref=database.ref().child('/codes/school/');
    ref.once('value',function(snap){
        var num=snap.numChildren();
        console.log(num);
        for(i=1;i<=num;i++){
            if(snap.child(i).val()==scid){
                getSchoolName(scid);
            }
        }
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