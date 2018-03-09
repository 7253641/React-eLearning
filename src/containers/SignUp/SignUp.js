import React, { Component } from 'react';
import './SignUp.css';
import face from '../../Asset/facebook.png';
import google from '../../Asset/google.png';


class SignUp extends Component {
  componentDidMount(){
    document.title = "Sign-Up - E-Learning"
  }
  constructor(props) {
    super(props);

    this.state = {
      // confirm: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    alert("First name: "+ this.refs.firstname.value+ "Last name: "+ this.refs.lastname.value
           + "Email: "+ this.refs.email.value+ "Password: "+ this.refs.password.value+"sex: "+this.refs.sex.value);
  }
  handleClear = () => { 
    this.myFormRef.reset();
  }

  checkpass = ( ) =>{
      if(this.password.value === this.confirmpassword.value){
          this.message.style.color = 'green';
          // this.setState({
          //   confirm: true
          // })
         
      }else{
        this.message.style.color = 'red';
        // this.setState({
        //   confirm: false
        // })
      }
  }
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Create your student account</h1><br/>
          <p>Your student account is your portal to all things E-LEARNING: your classroom, projects, forums, career resources, and more!</p>
        </div>
        <form className="needs-validation" ref={(el) => this.myFormRef = el} novalidate>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" ref="firstname" id="validationCustom01" placeholder="First Name" required />
              <div className="invalid-feedback">
                Please provide your first name.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" ref="lastname" id="validationCustom02"  placeholder="Last Name" required />
              <div className="invalid-feedback">
                Please provide your last name.
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12 mb-3">
              <input type="email" ref="email" className="form-control" id="validationCustom03" placeholder="Email" required />
              <div className="invalid-feedback">
                Please provide a Email.
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-5 mb-3">
              <input type="password" ref={(el) => this.password = el} onKeyUp={this.checkpass} className="form-control" id="validationCustom04" placeholder="Password" required />
              <div className="invalid-feedback">
                Please provide a Password.
              </div>
            </div>
            <div className="col-md-5 mb-3">
              <input type="password" ref={(el) => this.confirmpassword = el} onKeyUp={this.checkpass} className="form-control" id="validationCustom05" placeholder="Confirm Password" required />
              <div className="invalid-feedback">
                Please provide a Confirm Password.
              </div>
            </div>
            <div className="col-md-2 mb-3">
              <i className="fa fa-check" ref={(el) => this.message = el}/>
              {/* {this.state.confirm ? <span>true</span> : <span>false</span>} */}
            </div>
          </div> 
          
          <div className="form-row">
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <button className="btn btn-light button" type="submit" >SIGN UP</button>   
            </div>
            <div className="col-md-6 mb-3">
              <button className="btn btn-light button " type="button" onClick={this.handleClear}>CLEAR VALUE</button>         
            </div>
          </div>           
        </form>
        <hr/>
        <p>or sign up with one of these services</p>
        <div className="form-row">
            <div className="col-md-6 sm-12 mb-3">
              <a href="https://facebook.com">
                <img src={face} alt="" className="img" />
              </a>
            </div>
            <div className="col-md-6 sm-12 mb-3">
              <a href="https://google.com">
                <img src={google} alt="" className="img" />
              </a>
            </div>
        </div>   
      </div>
    );
  }
}
export default SignUp;