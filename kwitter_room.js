// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAUCSZ5dZQF86QAhrPDYFvFu3Fholq774s",
  authDomain: "reet-a68a0.firebaseapp.com",
  databaseURL: "https://reet-a68a0-default-rtdb.firebaseio.com",
  projectId: "reet-a68a0",
  storageBucket: "reet-a68a0.appspot.com",
  messagingSenderId: "274806377130",
  appId: "1:274806377130:web:2f809ee4190402f492ded3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}