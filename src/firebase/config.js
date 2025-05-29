import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCHDZxAdQuM_R3Z3Wrmnm-TtKK5ul2SvP4",
    authDomain: "elephant-deterrance-sys.firebaseapp.com",
    databaseURL: "https://elephant-deterrance-sys-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "elephant-deterrance-sys",
    storageBucket: "elephant-deterrance-sys.firebasestorage.app",
    messagingSenderId: "1070600413947",
    appId: "1:1070600413947:web:036b9367ad519017dc065e"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);