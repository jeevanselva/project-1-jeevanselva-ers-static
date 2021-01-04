import React from 'react'
import './login.css';
import TextField from '@material-ui/core/TextField';


export default class Login extends React.Component {
  constructor(props){
  super(props);
 this.state = { username:'',
  password:''};

 this.handleChange = this.handleChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e){
    e.preventDefault();
let credentials= {
userName: this.state.username,
password: this.state.password
}

try {
  let response = await fetch ("http://localhost:8080/ers/login", {
      method: "POST",
    body: JSON.stringify(credentials),
      headers: {
          "Content-Type":"application/json"
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

  this.props.updateLogin(true);

} catch (e) {
  console.log("Internal error")
}
  }


  handleChange(e){
    e.preventDefault();
    let targetName = e.target.name;
  
    if (targetName==="user") {
      this.setState(
        {
          username:e.target.value
        });
    }
    else {
      this.setState(
        {
          password:e.target.value})
    }
  }



 render(){
return(
    <form>
    <div className="input-field">
  <TextField  label="User Name" variant="outlined" name="user" onChange={this.handleChange} color="secondary"/>
  </div>
  <div className="input-field">
  <TextField  label="Password" variant="outlined" type="password" name="pass" onChange={this.handleChange} color="secondary"/>
</div>
<center><button type="submit" onClick={this.handleSubmit} class="btn btn-outline-danger btn-lg">Login</button></center>
</form>
);
}

}


