import React from 'react';
import PendingTable from './PendingReimbursements.js';
import AllTable from './AllReimbursements.js';


export default class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      pendingRows: [],
      allRows: [],
      currentState: true 

    }
    this.updateSelected = this.updateSelected.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
    this.handleClick = this.handleClick.bind(this);
  this.handleApproval = this.handleApproval.bind(this);
  this.updateState=this.updateState.bind(this);

  }

  handleClick(e) {
    let targetName = e.target.name;

    if (targetName === "new") {
      this.getPendingData()
      this.setState(
        {
          selected: "new"
        });
    }
    else if (targetName === "all") {
      this.getAllData()
      this.setState(
        {
          selected: "all"
        });
    }

  }

  async handleApproval(e){
    e.preventDefault();
    let changed = this.state.pendingChanged
    let value = e.target.value
    let resolved = {
      reimbursementId: value,
      status: "approved",
      resolverId: this.props.currentUser.userId
    }

  try {
    let response = await fetch("http://localhost:8080/ers/resolve", {
      method: "POST",
      body: JSON.stringify(resolved),
      headers: {
        "Content-Type": "application/json"
      }
    });

    let data = await response.json()

    this.updateState();

  }catch (e) {
    console.log("Internal error")
  }
}

updateState(){
  let currentState = this.state.currentState;
  let newState = !currentState;
  this.setState({
    currentState:newState
  });
}



  async handleDecline(e){
    e.preventDefault();
    let changed = this.state.pendingChanged
    let value = e.target.value
    let resolved = {
      reimbursementId: value,
      status: "declined",
      resolverId: this.props.currentUser.userId
    }

  try {
    let response = await fetch("http://localhost:8080/ers/resolve", {
      method: "POST",
      body: JSON.stringify(resolved),
      headers: {
        "Content-Type": "application/json"
      }
    });

    let data = await response.json()
    this.updateState();

  }catch (e) {
    console.log("Internal error")
  }

}

  async getPendingData() {
    
    try {
      let response = await fetch("http://localhost:8080/ers/resolve", {
        method: "GET"
      }
      );

      let data = await response.json()
      let list = data.list
      this.setState({
        pendingRows: list
      });

    } catch (e) {
      console.log(e.stack)
    }
  }


async getAllData() {
  try {
    let response = await fetch("http://localhost:8080/ers/all", {
      method: "GET",
    });

    let data = await response.json()
    let list = data.list
    this.setState({
      allRows: list
    });

  } catch (e) {
    console.log(e.stack)
  }
}


updateSelected() {
  this.setState(
    {
      selected: ''
    }
  );

}


render() {
  if (this.state.selected === 'new') {
    return <PendingTable rows={this.state.pendingRows} updateSelected={this.updateSelected} currentUser={this.props.currentUser} handleAprroval={this.handleApproval} handleDecline={this.handleDecline} />
  }
  else if (this.state.selected === 'all') {
    return <AllTable rows={this.state.allRows} updateSelected={this.updateSelected} />
  } else {
    return (
      <div>
        <h3>Welcome {this.props.currentUser.firstName}</h3>
        <button class="btn btn-warning btn-lg" type="button" name="new" onClick={this.handleClick}>New Reimbursements</button>
        <br/>
        <br/>
        <button class="btn btn-warning btn-lg" type="button" name="all" onClick={this.handleClick}>View All Reimbursements</button>
        <br/>
        <br/>
        <center> <button class="btn btn-dark" type="button" name="logout" onClick={this.logOut}>Log Out</button></center>
      </div>
    );
  }
}
}