import React from 'react';

import './style.css'

class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userName: '',
            userEmail: '',
            userPhone: '',
            userGender: '',
            userPassword: '',
        }
    }

    onNameChange = (event) => {
        this.setState({
            userName:event.target.value
       })         
    }

    onEmailChange = (event) => {
        this.setState({
            userEmail:event.target.value
        })
    }

    onPhoneChange = (event) => {
        this.setState({
            userPhone:event.target.value
        })
    }


    onGenderChange = (event) => {
        this.setState({
            userGender:event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            userPassword:event.target.value
        })
    }

//  We can also use a single function:
//
//    onFieldChange = (event) => {
//    this.setState({
//     [event.target.name]: event.target.value;
//        })
//    }
//
//
//  place name field for each input field
//  place onFieldCHange within each name change



    onSubmit = () =>{

        //Here the validation part using if to validate Phone Number
        if (this.state.userPhone.length !== 10) {
            return window.alert("Please provide correct number !")            
        }
        window.alert(`
        Name: ${this.state.userName}
        Email: ${this.state.userEmail}
        Phone: ${this.state.userPhone}
        Gender: ${this.state.userGender}
        Password: ${this.state.userPassword}
        `);

        this.clearForm()
    }

    

    clearForm = ()=>{
        this.setState({
            userName: '',
            userEmail: '',
            userPhone: '',
            userGender: '',
            userPassword: '',
        })
    }

    render = () => {
        return(

            <div className="form-container">
                <p>---User Form----</p>

                <input type="text"
                onChange={this.onNameChange}
                value={this.state.userName} 
                placeholder = "Enter your Full Name" />

                <input type="email" 
                onChange={this.onEmailChange} 
                value={this.state.userEmail}
                placeholder = "Enter your Email ID" />

                <input type="text" 
                onChange={this.onPhoneChange} 
                value={this.state.userPhone}
                placeholder = "Enter your Phone Number" />

                <select onChange={this.onGenderChange}
                    value={this.state.userGender}>
                        <option value="">--Choose Gender--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                </select>

                <input type="password"
                onChange={this.onPasswordChange}
                value={this.state.userPassword}
                placeholder="Enter your Password" />

                <button onClick={this.onSubmit}>Submit</button>


            </div>
        )
    }
}

export default Form