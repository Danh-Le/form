import React, { Component } from 'react';
import './App.css';

const regex = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
class App extends Component {
  constructor() {
    super()

    this.state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false
  }
}

handleFirstNameChange = (e) => {
  this.setState({firstName: e.target.value});
}
handleLastNameChange = (e) => {
  this.setState({lastName: e.target.value});
}
handleEmailChange = (e) => {
  this.setState({email: e.target.value});
  regex.test(e.target.value) && this.setState({emailIsValid:true});
}
handlePasswordChange = (e) => {
 this.setState({password: e.target.value}, () => {
  (e.target.value.length > 5) && this.setState ({passwordIsValid: true})
    })
}
handleRememberMeChange = (e) => {
  this.setState({rememberMe: !this.state.rememberMe})
}
handleSubmit = (e) => {
 e.preventDefault(
  (this.state.emailIsValid && this.state.passwordIsValid) && this.setState({isSubmitted:true})
)}

render() {
  return (
<section className="mb-5">
{!this.state.isSubmitted
? <>
  <h1 className="text-center">Login</h1>
<form onSubmit={this.handleSubmit}>
<div class="mb-3">
    <label htmlFor="inputFisrtName" className="form-label">First Name</label>
    <input type="text" className={`form-control ${(this.state.firstName.length > 1) ? "is-valid" : "is-invalid"}`} id="inputFirstName" onChange={this.handleFirstNameChange}></input>
  </div>
  <div class="mb-3">
    <label htmlFor="inputLastName" className="form-label">Last Name</label>
    <input type="text" className={`form-control ${(this.state.lastName.length > 1) ? "is-valid" : "is-invalid"}`} id="inputLastName" onChange={this.handleLastNameChange}></input>
  </div>
  <div class="mb-4">
    <label htmlFor="inputEmail" className="form-label">Email address</label>
    <input type="email" className={`form-control" ${this.state.emailIsValid ? "is-valid" : "is-invalid"}`} id="inputEmail" onChange={this.handleEmailChange}></input>
  </div>
  <div class="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className={`form-control ${this.state.passwordIsValid ? "is-valis" : "is-invalid"}`} id="inputPassword" onChange={this.handlePasswordChange}></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="checkRememberMe" onChange={this.handleRememberMeChange}></input>
    <label className="form-check-label" htmlFor="checkRememberMe">Remember me</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
: <h1 className="text-center">Félicitations {this.state.firstName} {this.state.lastName} !!!</h1>
}
</section>
  )
}
}

export default App;
