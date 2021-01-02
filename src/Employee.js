import React from 'react';


 export default class Employee extends React.Component {
  constructor(props){
  super(props);
  }


  render(){
return <h3>From the Employee page {this.props.currentUser.userName}</h3>
}

 }
  