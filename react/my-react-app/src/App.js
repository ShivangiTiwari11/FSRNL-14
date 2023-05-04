
import './App.css';
import Main from './components/Main/Main';
import React from 'react';
import FooterExample from './components/Footer/Footer';
import NavExample from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import Features from './components/Features/Features';
import { Route, Routes, useNavigation } from 'react-router-dom';
import SingleUserView from './components/singleUserView/singleUserView';
import LoginForm from './components/Login/Login'
 
function onLogin(navigate){
  console.log("hi there");
 
}
function App() {
  
    return (
      <>
     
      <NavExample/>
      
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='users' element={<Main/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='features' element={<Features/>}/>
        <Route path='users/:id' element={<SingleUserView/>}/>
        <Route path="*"
        element={
          <p>there is nothing here</p>
        }/>
      </Routes>
      <FooterExample/>
      </>
      
      // (this.state.isLoggedIn)?(<>
      // <NavExample/>
      // <Main />
      // 
      // </>): 
      // <LoginForm loginHandler={()=>this.onLogin()}/>
      
    );
  
}

export default App;
