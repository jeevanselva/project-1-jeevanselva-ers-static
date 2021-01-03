import React from 'react';


export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      amount: 0,
      description: '',
      type: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    let submission = {
      authorId: this.props.currentUser.userId,
      amount: this.state.amount,
      description: this.state.description,
      type: this.state.type
    }

    try {
      let response = await fetch("http://localhost:8080/ers/login", {
        method: "POST",
        body: JSON.stringify(submission),
        headers: {
          "Content-Type": "application/json"
        }
      });

      let data = await response.json()

      let currentUser = {
        userId: data.userId,
        firstName: data.firstName,
        lastName: data.lastName,
        userRole: data.userRole
      };

      if (currentUser) {
        this.props.setUser(currentUser);
      }
      else {
        this.props.setValidation(false)
      }

    } catch (e) {
      console.log("Internal error")
    }
  }


  handleChange(e) {
    e.preventDefault();
    let targetName = e.target.name;

    if (targetName === "amount") {
      this.setState(
        {
          amount: e.target.value
        });
    }
    else if (targetName === "desc") {
      this.setState(
        {
          description: e.target.value
        });
    }
    else if (targetName === "type") {
      this.setState(
        {
          type: e.target.value
        });
    }
  }



  render() {

    return (

        <div>
          <form>

            <div class="dropdown">
              <label for="loanType">Reimbursement Type: </label>
              <select id="loanType" name="type" onChange={this.handleChange}>
                <option id="loan-type-lodging" value="lodging">Lodging</option>
                <option id="loan-type-travel" value="travel"> Travel</option>
                <option id="loan-type-food" value="food">Food</option>
                <option id="loan-type-other" value="Other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="inputAmount">Amount</label>
              <input type="text" class="form-control" id="inputAmount" placeholder="Enter Amount" name="amount"onChange={this.handleChange}/>
            </div>

            <div class="form-group">
              <label for="inputText">Description</label>
              <input type="text-area" class="form-control" id="inputText" name="desc" onChange={this.handleChange}/>
            </div>

            <button type="submit" class="btn btn-success" onSubmit={this.handleChange}>Submit</button>
          </form>

        </div>
          );
          }
 }