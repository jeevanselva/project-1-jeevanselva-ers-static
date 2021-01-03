import React from 'react';
import Manager from './Manager.js';
import Employee from './Employee.js';


 export default class Main extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    currentUser: this.props.currentUser 
  };
  }


  render(){
if (this.state.currentUser.userRole==='manager'){
  return <Manager currentUser={this.state.currentUser}/>
}
else if (this.state.currentUser.userRole==='employee'){
return <Employee currentUser={this.state.currentUser}/>
}
   }

}

  