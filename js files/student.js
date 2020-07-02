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

  function viewData(){
    
      var cls=document.getElementById('class').value;
      var sname=localStorage.getItem('schoolname');
      console.log(cls+" "+sname);
      var ref=database.ref().child('/school/'+sname+'/'+cls);
      ref.once('value',(function(snapshot){
        snapshot.forEach(function(child){
          var content="";
          var rno=child.key;
          var address=child.val().address;
          var attendance=child.val().attendance;
          var cast=child.val().cast;
          var dob=child.val().dob;
          var fname=child.val().father_name;
          var focc=child.val().father_occupation;
          var gender=child.val().gender;
          var marks=child.val().marks;
          var mobno=child.val().mobileno;
          var mname=child.val().mother_name;
          var mocc=child.val().mother_occupation;
          var sname=child.val().student_name;
          content+='<tr>';
          content+='<td>'+rno+'</td>';
          content+='<td>'+sname+'</td>';
          content+='<td>'+dob+'</td>';
          content+='<td>'+gender+'</td>';
          content+='<td>'+cast+'</td>';
          content+='<td>'+fname+'</td>';
          content+='<td>'+focc+'</td>';
          content+='<td>'+mname+'</td>';
          content+='<td>'+mocc+'</td>';
          content+='<td>'+mobno+'</td>';
          content+='<td>'+address+'</td>';
          content+='<td>'+attendance+'</td>';
          content+='<td>'+marks+'</td>';
          content+='</tr>';
          $('table').append(content);
        });
        
      }));
      document.getElementById('btn').disabled="true";
  }