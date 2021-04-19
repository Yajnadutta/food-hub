import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyD3gzO1PdzVclEaAiWZSbY27qSSx-wlbAk",
    authDomain: "example-a6d17.firebaseapp.com",
    projectId: "example-a6d17",
    storageBucket: "example-a6d17.appspot.com",
    messagingSenderId: "996825026910",
    appId: "1:996825026910:web:e0e8554e9b5a1444d7bfcf"
})

export const auth = app.auth()
export default app
