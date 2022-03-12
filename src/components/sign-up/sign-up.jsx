import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './sign-up.styles.scss';

class SignUp extends Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''

        }
    }
    handleForm=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if (password!==confirmPassword){
            alert("password doesn't match");
            return;
        }

        try{
            // destructuring returning user from createuserwithemailandpassword
            const {user}=await createUserWithEmailAndPassword(auth,email,password);
            // storing the new user at our firebase data base with the display name
            await createUserProfileDocument(user,{displayName});
            // clear the state to take new users
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''

        })
        }
        catch(error){
            console.error(error)

        }

        
        

    }
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
        }

    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Create a new account</span>
                <form onSubmit={this.handleForm} className="form">
                    <FormInput
                    onChange={this.handleChange}
                    type='text'
                    name='displayName'
                    label='Diplay Name'
                    value={displayName}
                    required/>

                    <FormInput
                    onChange={this.handleChange}
                    type='email'
                    name='email'
                    label='Email'
                    value={email}
                    required/>

                    <FormInput
                    onChange={this.handleChange}
                    type='password'
                    name='password'
                    label='Password'
                    value={password}
                    required/>

                    <FormInput
                    onChange={this.handleChange}
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    value={confirmPassword}
                    required/>
                </form>
                <div className="buttons">
                    <CustomButton onClick={this.handleForm} type='button'>Sign up</CustomButton>
                </div>
            </div>
        )
    }
}

export default SignUp