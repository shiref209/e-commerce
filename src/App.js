import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Routes, Route} from "react-router-dom";
import Shop from './pages/homepage/shop/shop';
import Header from './components/header/header'
import Sign from './pages/Sign/sign';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';


class App extends Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }

  unSubscribeFromAuth=null;

  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async user=>{
      if (user){
        const docRef=await createUserProfileDocument(user);
        // storing sign-in data in the state
        docRef.onSnapshot(snapShot=>{
          this.setState(
            {
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            }
          )
        })
      }
      this.setState({currentUser:user})
      

    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  

  render(){
    return(
      
      <div >
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/sign' element={<Sign/>}></Route>
        </Routes>
  
      </div>
    );
  }

}

export default App;
