
import {auth,provider} from "../../config/firebase-config";
import {signInWithPopup} from'firebase/auth';
import {useNavigate,Navigate} from "react-router-dom"
import {useGetUserInfo} from"../../hooks/useGetUserInfo";
export const Auth=()=>{
    const navigate=useNavigate();
    const {isAuth}=useGetUserInfo();
    const SignInWithGoogle = async () => {
        const results = await signInWithPopup(auth,provider);
        const authinfo={
            userid:results.user.uid,
            name:results.user.displayName,
            profilephoto:results.user.photoURL,
            isAuth:true
        };
        localStorage.setItem("auth",JSON.stringify(authinfo));
        navigate("/expense-tracker");
    };
    if(isAuth){
       return<Navigate to="/expense-tracker"/>
    }
    return (
        <>
       
        <h1>Expense-Tracker</h1>
        <div className="login-page">
            <p>Sign in with Google to Continue</p>
            <button onClick={SignInWithGoogle}>Sign In with Google</button>
            </div>
            </>
        
    )
};