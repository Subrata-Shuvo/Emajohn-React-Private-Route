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
step 2 : Set up component
1. create login component
2. Create register component
3. Create rpoute for login and register


----------------------

Step 3: Set auth system
1. set up sign in method
2. set up sign out method
3. set user state
4. special observer
5. return necessary methods and states from firebase

----------------------------

Step 4: Create auth context(UseAuth)
1. Create a auth context
2. Create context provider/ auth provider
3. set context provider context value
4. use auth provider
5. create useAuth hook

-----------------------------
Step 5: Create private route
1. Create private route
2. set private route

-------------------------------
Step 6: Redirect after login
1. After login redirect user to their desired destination
*/