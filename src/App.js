import React from 'react';
import Login from './Login.js';
import './app.css';
import Main from './Main.js';


 export default class App extends React.Component {
  constructor(props){
  super(props);
 this.state = { currentUser: null,
  unvalidated: true,
  loggedIn: false
  }
  this.setUser = this.setUser.bind(this)
  this.setValidation = this.setValidation.bind(this)
  this.updateLogin = this.updateLogin.bind(this)

}

setUser(val) {
  this.setState(
    {
      currentUser: val

    }
  )}


updateLogin(val) {
  this.setState(
    {
      loggedIn: val

    }
  )}

  setValidation(val) {
    this.setState(
      {
        unvalidated: val
  
      }
    )}


  render(){
if (this.state.loggedIn){
  return <div class="app-container"><Main currentUser={this.state.currentUser} updateLogin={this.updateLogin}/></div>
}
else if (!this.state.loggedIn) {
  return <div class="app-container"><Login setUser={this.setUser} updateLogin={this.updateLogin}/></div>
}
}
   }


  
