import React from 'react';
import Manager from './Manager.js';
import Employee from './Employee.js';


 export default class Main extends React.Component {
  constructor(props){
  super(props);
  }


  render(){
if (this.props.currentUser.userRole==='manager'){
  return <Manager/>
}
else if (this.props.currentUser.userRole==='employee'){
return <Employee/>
}
   }

}

  