import TextField from '@material-ui/core/TextField';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
      let response = await fetch("http://localhost:8080/ers/submit", {
        method: "POST",
        body: JSON.stringify(submission),
        headers: {
          "Content-Type": "application/json"
        }
      });

      let data = await response.json()
      this.props.updateSelected()

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

    
    
          
        <InputLabel id="demo-simple-select-outlined-label">Reimbursement Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={this.handleChange}
          label="Type"
          name="type" color="secondary"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Lodging"}>Lodging</MenuItem>
          <MenuItem value={"travel"}>Travel</MenuItem>
          <MenuItem value={"food"}>Food</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
          <br/>
          <br/>
        
             <div>
            <TextField label="Amount" placeholder="Enter Amount" variant="outlined" type="text" onChange={this.handleChange} name="amount" color="secondary" />
          </div>
          <br />
          <div>
            
            <TextField id="outlined-textarea" label="Description" placeholder="Enter description" multiline variant="outlined" name="desc" onChange={this.handleChange} color="secondary" />
          </div>
          <br/>

          <button type="submit" className="btn btn-success btn-lg" onClick={this.handleSubmit}>Submit</button>
        </form>

      </div>
    );
  }
}