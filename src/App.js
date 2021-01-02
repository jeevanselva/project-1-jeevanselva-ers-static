import React from 'react';
import Login from './Login.js';
import './login.css';
import Main from './Main.js';

 export default class App extends React.Component {
  constructor(props){
  super(props);
 this.state = { currentUser: null,
  unvalidated: true
  }
  this.setUser = this.setUser.bind(this)
  this.setValidation = this.setValidation.bind(this)

}

setUser(val) {
  this.setState(
    {
      currentUser: val

    }
  )}

  setValidation(val) {
    this.setState(
      {
        unvalidated: val
  
      }
    )}


  render(){
if (this.state.unvalidated && !this.state.currentUser){
  return <Login setUser={this.setUser}/>
}
else if (this.state.currentUser) {
return <Main currentUser={this.state.currentUser}/>
}
   }

}

  
