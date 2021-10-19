import initFirebase from "../Firebase/firebase.init"
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
initFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loding, setLoding] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    //handle google sign in
    const signInGoogle = () => {
        setLoding(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);

            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
            .finally(() => setLoding(false))
    }

    //handle github sign in
    const signInGithub = () => {
        setLoding(true)
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
            .finally(() => setLoding(false))
    }

    //handle facebook sign in
    const signInFacebook = () => {
        setLoding(true)
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message)
            })
            .finally(() => setLoding(false))
    }

    //handle Email and passwoed regustion
    const creatUser = (name, email, password) => {
        setLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                displayname(name)
            })
            .catch(error => {
                console.log(error.message)
            })
            .finally(() => setLoding(false))

    }

    //handle login
    const userLogin = (email, password) => {
        setLoding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
            .finally(() => setLoding(false))

    }

    //handle display name
    const displayname = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }





    //handle logOut
    const logOut = () => {
        setLoding(true)
        signOut(auth)
            .then(result => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoding(false))
    }

    //observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setLoding(false)
        })

        return () => unsubscribed;
    }, [])


    return { signInGoogle, user, logOut, signInGithub, signInFacebook, error, loding, creatUser, userLogin }
}



export default useFirebase;