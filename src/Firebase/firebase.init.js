import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication


/* steps for authentication 
------------------------
Initial setup
1. Firebase: create project
2. Create web app
3. get configuration
4. initialize firebase
5. Enable auth methd for signing in from sign-up-method

------------------------------
step 2 : 
1. create login component
2. Create register component
3. Create rpoute for login and register


----------------------

Step 3:
1. set up sign in method
2. set up sign out method
3. set user state
4. special observer
*/