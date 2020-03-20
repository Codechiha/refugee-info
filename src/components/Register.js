import React, { Component } from 'react';
import axios from 'axios';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
// import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

class Register extends Component {
    state = {
        login: {
            username: '',
            password: ''
        },
    };

    handleChanges = e => {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        });
        console.log(e.target.value)
    }

    handleSubmit = event => {
        event.preventDefault();

        axios
            .post(`https://ancient-ocean-58774.herokuapp.com/register`, this.state.login)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
            })
            .catch(err => {
                console.log(err);
            })
    }



    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                    <Input 
                        name="username"
                        placeholder="type a username"
                        type="text"
                        onChange={this.handleChanges}
                        value={this.state.login.username} 
                    />
                </InputGroup>
                <br />
                <InputGroup>
                <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                    <Input
                        name="password" 
                        placeholder="type a password" 
                        type="password" 
                        step="1"
                        onChange={this.handleChanges}
                        value={this.state.login.password} 
                    />
                <InputGroupAddon addonType="append">
                    <Button color="secondary">Sign Up</Button>
                </InputGroupAddon>
                </InputGroup>
            </form>
    )}
}


export default Register;