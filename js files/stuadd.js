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
  

  function storeDetails(){
        var sname=localStorage.getItem('schoolname');
        var rcls=document.getElementById('class').value;
        var rrno=document.getElementById('RollNumber').value;
        var rname=document.getElementById('Name').value;
        var rdob=document.getElementById('dob').value;
        var rgender=document.getElementById('gender').value;
        var rcast=document.getElementById('Cast').value;
        var rfname=document.getElementById('FathersName').value;
        var rfocc=document.getElementById('FathersOccupation').value;
        var rmname=document.getElementById('MotherName').value;
        var rmocc=document.getElementById('MotherOccupation').value;
        var rmobnum=document.getElementById('MoblieNumber').value;
        var radd=document.getElementById('Address').value;
        var ratten=document.getElementById('Attendance').value;
        var rmarks=document.getElementById('Marks').value;
        var ref=database.ref().child('/school/'+sname+'/'+rcls+'/'+rrno);
        var gref=database.ref().child('/counts/'+sname+'/'+rcls+'/gender');
         var fc=-1;
        var mc=-1;
        gref.once('value',function(snap){
          fc=snap.val().female;
          mc=snap.val().male;
           
          if(rgender=="female"){
            gref.child('/female').set(fc+1);
          }
          else{
            gref.child('/male').set(mc+1);
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
           
          if(ratten>80 && ratten<=100){
            aref.child('/a1').set(i+1);
          }
          else if(ratten>60 && ratten<=80){
            aref.child('/a2').set(j+1);
          }
          else if(ratten>40 && ratten<=60){
            aref.child('/a3').set(k+1);
          }
          else{
            aref.child('/a4').set(m+1);
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
           
          if(rmarks>80 && rmarks<=100){
            mref.child('/m1').set(a+1);
          }
          else if(rmarks>60 && rmarks<=80){
            mref.child('/m2').set(b+1);
          }
          else if(rmarks>40 && rmarks<=60){
            mref.child('/m3').set(c+1);
          }
          else{
            mref.child('/m4').set(d+1);
          }
        });
         
         
        ref.set({
            student_name:rname,
            dob:rdob,
            gender:rgender,
            cast:rcast,
            father_name:rfname,
            father_occupation:rfocc,
            mother_name:rmname,
            mother_occupation:rmocc,
            mobileno:rmobnum,
            address:radd,
            attendance:ratten,
            marks:rmarks,
        })
        alert('information is submitted');
  }