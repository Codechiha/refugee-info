import React, { Component } from 'react';
import axios from 'axios';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import styled from 'styled-components';
// import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

const Styles = styled.div`
    .login-container {
        border: 1px solid red;
        color: black;
        display: flex;
        flex-flow: column;
        height: 200px;
    }

    .login-button {
        color: black;
        width: 100px;
        margin: 0 auto;
        margin-top: 20px;
    }
`
class Login extends Component {
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
        
        const endpoint = 'https://ancient-ocean-58774.herokuapp.com/login';

        axios
            .post(endpoint, this.state.login)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                // localStorage.setItem('isLoggedIn', true);
                // //below code redirects user upon successful login
                // window.location = "#/approvals";
                // document.location.reload(true);
            
            })
            .catch(err => {
                console.log(err);
                window.location = "/";
            })
    }

    render(){
        if(!this.props.show){
            return null
        }
        return (
            <Styles>
            <div >
                <form onSubmit={this.handleSubmit} className='login-container'>
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
                    </InputGroup>
                    <Button color="secondary" className='login-button'>Log-in</Button>
                </form>
            </div>
            </Styles>
    )}
}


export default Login;