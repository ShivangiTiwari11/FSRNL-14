
import './App.css';
import LoginForm from './components/Login/Login';
import './components/Main/Main'
import Main from './components/Main/Main';
import React from 'react';
import FooterExample from './components/Footer/Footer';
import NavExample from './components/NavBar/NavBar';
 

class App extends React.Component {
  constructor() {
    super();
    this.state={isLoggedIn:false};
  }
  onLogin(){
    console.log("button clicked")
    this.setState({isLoggedIn:true});
  }
  render() {
    return (
      (this.state.isLoggedIn)?(<>
      <NavExample/>
      <Main />
      <FooterExample/>
      </>): 
      <LoginForm loginHandler={()=>this.onLogin()}/>
      
    );
  }
}

export default App;
