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
  var sname=localStorage.getItem('schoolname');
   
    function first(){
      var cls=document.getElementById('class').value;
      console.log(cls);
    var ref=database.ref().child('/school'+'/'+sname+'/'+cls);
    ref.once('value',function(att){
      att.forEach(function(child){
     var a=child.val().attendance;
     var m=child.val().marks;
      console.log(a);
      var aref=database.ref().child('/counts/'+sname+'/'+cls+'/attendance');
         var i=-1;
        var j=-1;
        var k=-1;
        var p=-1;
        aref.once('value',function(att){
          i=att.val().a1;
          j=att.val().a2;
          k=att.val().a3;
          p=att.val().a4;
           
          if(a>80 && a<=100){
            aref.child('/a1').set(i-1);
          }
          else if(a>60 && a<=80){
            aref.child('/a2').set(j-1);
          }
          else if(a>40 && a<=60){
            aref.child('/a3').set(k-1);
          }
          else{
            aref.child('/a4').set(p-1);
          }
        });

        var mref=database.ref().child('/counts/'+sname+'/'+cls+'/marks');
         var u=-1;
        var b=-1;
        var c=-1;
        var d=-1;
        mref.once('value',function(score){
          u=score.val().m1;
          b=score.val().m2;
          c=score.val().m3;
          d=score.val().m4;
           
          if(m>80 && m<=100){
            mref.child('/m1').set(u-1);
          }
          else if(m>60 && m<=80){
            mref.child('/m2').set(b-1);
          }
          else if(m>40 && m<=60){
            mref.child('/m3').set(c-1);
          }
          else{
            mref.child('/m4').set(d-1);
          }
        });
    });
  });
}
  function submit(){
    var sname=localStorage.getItem('schoolname');
    var cls=document.getElementById('class').value;
    var ref=database.ref().child('/school'+'/'+sname+'/'+cls);
    
      for(h=1;h<=10;h++){
        
        var atten=document.getElementById('a'+h).value;
        var marks=document.getElementById('m'+h).value;
        if(!(atten.length==0 && marks.length==0)){
            ref.child('/'+h+'/'+'attendance').set(atten);
            ref.child('/'+h+'/'+'marks').set(marks);
        }
        var aref=database.ref().child('/counts/'+sname+'/'+cls+'/attendance');
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
            aref.child('/a1').set(i+1);
          }
          else if(atten>60 && atten<=80){
            aref.child('/a2').set(j+1);
          }
          else if(atten>40 && atten<=60){
            aref.child('/a3').set(k+1);
          }
          else{
            aref.child('/a4').set(m+1);
          }
        });
        var mref=database.ref().child('/counts/'+sname+'/'+cls+'/marks');
         var a=-1;
        var b=-1;
        var c=-1;
        var d=-1;
        mref.once('value',function(score){
          a=score.val().m1;
          b=score.val().m2;
          c=score.val().m3;
          d=score.val().m4;
           
          if(marks>80 && marks<=100){
            mref.child('/m1').set(a+1);
          }
          else if(marks>60 && marks<=80){
            mref.child('/m2').set(b+1);
          }
          else if(marks>40 && marks<=60){
            mref.child('/m3').set(c+1);
          }
          else{
            mref.child('/m4').set(d+1);
          }
        });
        
      }
      alert('changes have been made');
  }