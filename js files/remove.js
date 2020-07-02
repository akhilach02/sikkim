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

  function submit(){
    var sname=localStorage.getItem('schoolname');
    var rcls=document.getElementById('class').value;
    var rrno=document.getElementById('RollNumber').value;
    console.log(sname+" "+rcls+" "+rrno);
    var ref=database.ref().child('/school'+'/'+sname+'/'+rcls+'/'+rrno);
    ref.once('value',function(child){
      
     var atten=child.val().attendance;
     var mar=child.val().marks;
     var gen=child.val().gender;
      console.log(atten+" "+mar+" "+gen);
      ref.remove();
    var gref=database.ref().child('/counts/'+sname+'/'+rcls+'/gender');
         var fc=-1;
        var mc=-1;
        gref.once('value',function(snap){
          fc=snap.val().female;
          mc=snap.val().male;
           
          if(gen=="female"){
            gref.child('/female').set(fc-1);
          }
          else{
            gref.child('/male').set(mc-1);
          }
        });
        var aref=database.ref().child('/counts/'+sname+'/'+rcls+'/attendance');
         var i=-1;
        var j=-1;
        var k=-1;
        var m=-1;
        aref.once('value',function(att){
          i=att.val().a1;
          j=att.val().a2;
          k=att.val().a3;
          m=att.val().a4;
           
          if(atten>80 && atten<=100){
            aref.child('/a1').set(i-1);
          }
          else if(atten>60 && atten<=80){
            aref.child('/a2').set(j-1);
          }
          else if(atten>40 && atten<=60){
            aref.child('/a3').set(k-1);
          }
          else{
            aref.child('/a4').set(m-1);
          }
        });
        var mref=database.ref().child('/counts/'+sname+'/'+rcls+'/marks');
         var a=-1;
        var b=-1;
        var c=-1;
        var d=-1;
        mref.once('value',function(score){
          a=score.val().m1;
          b=score.val().m2;
          c=score.val().m3;
          d=score.val().m4;
           
          if(mar>80 && mar<=100){
            mref.child('/m1').set(a-1);
          }
          else if(mar>60 && mar<=80){
            mref.child('/m2').set(b-1);
          }
          else if(mar>40 && mar<=60){
            mref.child('/m3').set(c-1);
          }
          else{
            mref.child('/m4').set(d-1);
          }
        });
    
  });

alert('information is submitted');
  }




