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

 
 
  //var count=0;
  function submit(){
    console.log("enetered");
   var sname=localStorage.getItem('schoolname');
  
    var cls=document.getElementById('class').value;
       
  console.log(sname+" "+cls);
 
            
  
     
            var fc=0;
            var mc=0;
             var a;
             var b;
            var ref=database.ref().child('/counts/'+sname+'/'+cls+'/gender');
            ref.on('value',function(snap){
                fc=snap.val().female;
                mc=snap.val().male;
                
                a=((fc/(fc+mc))*100);
               b=((mc/(fc+mc))*100);
               console.log("enetered"+a+" "+b);
            
            var chart = new CanvasJS.Chart("1", {
                animationEnabled: true,
                title: {
                    text: "ANALYTICS OF GENDER"
                },
                data: [{
                    type: "pie",
                    startAngle: 240,
                    yValueFormatString: "##0.00\"%\"",
                    indexLabel: "{label} {y}",
                    dataPoints: [
                        {y: a, label: "FEMALE"},
                        {y: b, label: "MALE"}
                         
                    ]
                }]
            });

       // document.getElementById('1').innerHTML=<P>FGTYRFTFTFTYFFDXJHHJJGYVGGVGGG</P>
        chart.render();
            });

        getchart2();
        getchart3();
        
    
    }
    function getchart2(){
     
        var sname=localStorage.getItem('schoolname');
  
    var cls=document.getElementById('class').value;
    
     var i=0;
    var j=0;
    var k=0;
    var m=0;
     var w;
     var x;
     var y1;
     var z;
     var t=0;
    var aref=database.ref().child('/counts/'+sname+'/'+cls+'/attendance');
    aref.on('value',function(att){
        i=att.val().a1;
        j=att.val().a2;
        k=att.val().a3;
        m=att.val().a4;
        t=(i+j+k+m);
       
        w=((i/t)*100);
       x=((j/t)*100);
       y1=((k/t)*100);
       z=((m/t)*100);

    var chart = new CanvasJS.Chart("2", {
        animationEnabled: true,
        title: {
            text: "ANALYTICS OF ATTENDANCE"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: w, label: "80-100"},
                {y: x, label: "60-80"},
                {y: y1, label: "40-60"},
                {y: z, label: "0-40"}
                
                 
            ]
        }]
    });
chart.render();
    });
    }
    function getchart3(){
        var sname=localStorage.getItem('schoolname');
  
        var cls=document.getElementById('class').value;
        
        var ii=0;
    var jj=0;
    var kk=0;
    var mm=0;
     var wm;
     var xx;
     var yy;
     var zz;
     var tt=0;
    var mref=database.ref().child('/counts/'+sname+'/'+cls+'/marks');
    mref.once('value',function(score){
        ii=score.val().m1;
        jj=score.val().m2;
        kk=score.val().m3;
        mm=score.val().m4;
        tt=(ii+jj+kk+mm);
       
        ww=((ii/tt)*100);
       xx=((jj/tt)*100);
       yy=((kk/tt)*100);
       zz=((mm/tt)*100);

    var chart = new CanvasJS.Chart("3", {
        animationEnabled: true,
        title: {
            text: "ANALYTICS OF MARKS"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: ww, label: "80-100"},
                {y: xx, label: "60-80"},
                {y: yy, label: "40-60"},
                {y: zz, label: "0-40"}
                
                 
            ]
        }]
    });
chart.render();
    });
    }
     

      
  

       