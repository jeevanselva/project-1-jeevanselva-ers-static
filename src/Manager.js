import React from 'react';
import PendingTable from './PendingReimbursements.js';
import AllTable from './AllReimbursements.js';


export default class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      rows: []
    }
    this.updateSelected = this.updateSelected.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let targetName = e.target.name;

    if (targetName === "new") {
      this.getPastData("new")
      this.setState(
        {
          selected: "new"
        });
    }
    else if (targetName === "all") {
      this.getPastData("all")
      this.setState(
        {
          selected: "all"
        });
    }

  }


  async getPastData(option) {

    if (option==='new') {
    try {
      let response = await fetch("http://localhost:8080/ers/resolve", {
        method: "GET"}
      );

      let data = await response.json()
      let list = data.employeeList
        this.setState({
          rows: list
        });
            
    } catch (e) {
      console.log(e.stack)
    }
  } else if (option==='all') {
    try {
      let response = await fetch("http://localhost:8080/ers/all", {
        method: "GET",
      });

      let data = await response.json()
      let list = data.employeeList
        this.setState({
          rows: list
        });
            
    } catch (e) {
      console.log(e.stack)
    }
  }

  }

  updateSelected() {
    this.setState(
      {
        selected:''
      }
    );

  }


  render() {
    if (this.state.selected === 'new') {
      return <PendingTable rows={this.state.rows} updateSelected={this.updateSelected}/>
    }
    else if (this.state.selected === 'all') {
      return <AllTable rows={this.state.rows} updateSelected={this.updateSelected}/>
    } else {
      return (
        <div>
          <h3>Welcome {this.props.currentUser.firstName}</h3>
          <button class="btn btn-primary" type="button" name="new" onClick={this.handleClick}>New Reimbursements</button>
          <button class="btn btn-primary" type="button" name="all" onClick={this.handleClick}>View All Reimbursements</button>
        </div>
      );
    }
  }
}