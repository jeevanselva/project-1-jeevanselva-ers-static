import React from 'react';
import Submit from './Submit.js';
import PastTable from './PastReimbursements.js';


export default class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      pastRows: [],
      currentState: false,
      currentUser: props.currentUser
    }
    this.updateSelected = this.updateSelected.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateState=this.updateState.bind(this);
  }

  handleClick(e) {
    let targetName = e.target.name;

    if (targetName === "submit") {
      this.setState(
        {
          selected: "submit"
        });
    }
    else if (targetName === "past") {
      this.getPastData()
      this.setState(
        {
          selected: "past"
        });
    }

  }

  updateState(){
    let currentState = this.state.currentState;
    let newState = !currentState;
    this.setState({
      currentState:newState
    });
  }

  updateSelected(select) {
    this.setState(
      {
        selected: ''
      }
    );

  }


  async getPastData() {

    try {
      let response = await fetch("http://localhost:8080/ers/past", {
        method: "POST",
        body: JSON.stringify(this.props.currentUser),
        headers: {
          "Content-Type": "application/json"
        }
      });

      let data = await response.json()
      let list = data.employeeList
      this.setState({
        pastRows: list
      });

    } catch (e) {
      console.log(e.stack)
    }


  }


  render() {
    if (this.state.selected === 'past') {
      return <PastTable rows={this.state.pastRows} updateSelected={this.updateSelected} updateState={this.updateState}/>
    }
    else if (this.state.selected === 'submit') {
      return <Submit updateSelected={this.updateSelected} updateState={this.updateState} currentUser={this.state.currentUser} />
    } else {
      return (
        <div>
          <h3>Welcome {this.props.currentUser.firstName}</h3>
          <button class="btn btn-warning btn-lg" type="button" name="submit" onClick={this.handleClick}>Submit New Reimbursement</button>
          <br/>
          <br/>
            <button class="btn btn-warning btn-lg" type="button" name="past" onClick={this.handleClick}>View Past Reimbursements</button>
            <br/>
            <br/>
             <center> <button class="btn btn-dark" type="button" name="logout" onClick={this.logOut}>Log Out</button></center>
    
        </div>
       
      );
    }
  }
}