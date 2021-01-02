import React from 'react';


 export default class Manager extends React.Component {
  constructor(props){
  super(props);
  }


  render(){
return <h3>From the Manager page {this.props.currentUser.userName}</h3>
}

 }
  