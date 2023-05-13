
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBRuDnDHxsv0G47Rg1t-zQGSwU38F0Oqec",
  authDomain: "mywebsite-96e48.firebaseapp.com",
  projectId: "mywebsite-96e48",
  storageBucket: "mywebsite-96e48.appspot.com",
  messagingSenderId: "344749155287",
  appId: "1:344749155287:web:12721c6707801c2adbe192",
  measurementId: "G-52SD7LMBWP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

    //----- New Registration code start	  
    document.getElementById("register").addEventListener("click", function() {
      var email =  document.getElementById("login_email").value;
      var password = document.getElementById("login_password").value;
      //For new registration
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Registration successfully!!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
        alert(error);
      });		  		  
  });
  //----- End
  //----- Login code start	  
  document.getElementById("login").addEventListener("click", function() {
      var email =  document.getElementById("login_email").value;
      var password = document.getElementById("login_password").value;

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log(user);
        alert(user.email+" Login successfully!!!");
        if(email && password)
        {
            
          window.location.replace("index.html");  
        
        }
        else {
           alert("Invalid information");
            return ;
        }
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);

      });		  		  
  });



  let signupbtn =document.getElementById("register");
  let signinbtn =document.getElementById("login");
  let nameField =document.getElementById("nameField");
  let title =document.getElementById("title");

  signinbtn.onclick = function(){
      nameField.style.maxHeight = "0";
      title.innerHTML="sign in";
      signupbtn.classList.add("dis");
      signinbtn.classList.remove("dis");
  }

  signupbtn.onclick = function(){
      nameField.style.maxHeight = "60px";
      title.innerHTML="sign up";
      signupbtn.classList.remove("dis");
      signinbtn.classList.add("dis");
  }
  