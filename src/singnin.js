// ! Handling The backend 
import {initializeApp} from 'firebase/app'
import {
    getFirestore,
}from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    UserProfile,
    updateProfile,
}from 'firebase/auth'


const firebaseConfig ={
    apiKey: "AIzaSyC7cxN1QP99rncdyhlLehl1WA5aLrGnUuU",
  authDomain: "khoomie-4c556.firebaseapp.com",
  authDomain: "khoomie-4c556.firebaseapp.com",
    projectId: "khoomie-4c556",
    storageBucket: "khoomie-4c556.appspot.com",
    messagingSenderId: "121978997038",
    appId: "1:121978997038:web:4a5d21cd13f99bc9ce92bf",
    measurementId: "G-0J15LGBK2R"
}
~
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth()

const signUp = document.getElementById("sign-up")
console.log(signUp)

signUp.addEventListener("submit",(e)=>{
    e.preventDefault()
    const userName= signUp.username.value
    const email= signUp.email.value
    const password= signUp.password.value
    console.log(userName, password, email)
    createUserWithEmailAndPassword(auth, email, password)
    .then(cred=>{
    console.log(cred.user)
    // ! So Essential
        signUp.reset()
}).then(()=>{
updateProfile(auth.currentUser, {
    displayName: userName
    }).then(() => {
    // Profile updated!
    console.log("Profile updated!")
    }).catch((error) => {
    // An error occurred
        console.log(error)
    });
})
    .catch((err)=>{
        console.log(err.message)
    })


})

