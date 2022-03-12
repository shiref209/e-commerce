import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import './sign.styles.scss';

const Sign =()=>{
    return(
        <div className="sign">
            <SignIn/>
            <SignUp/>
            </div>
    )
}

export default Sign;