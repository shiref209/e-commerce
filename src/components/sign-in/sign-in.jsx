import React, { Component } from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }

    }
    handleForm=async event=>{
        event.preventDefault();
        try{
            const {email,password}=this.state;
            await signInWithEmailAndPassword(auth,email,password);
            // clear the state if it succeds
            this.setState({email:'',password:''});

        }
        catch(error){console.error(error)}

        

    }
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
        }
    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Enter your email and password</span>
                <form onSubmit={this.handleForm}>
                    <FormInput
                    onChange={this.handleChange}
                    name='email'
                    value={this.state.email}
                    type='email'
                    required
                    label='email'/>
                    

                    <FormInput
                    onChange={this.handleChange}
                    name='password' 
                    value={this.state.password} 
                    type='password'
                    required
                    label='password'/>
                    <div className="buttons">
                    <CustomButton>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSigned>Sign in with Google</CustomButton>

                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;