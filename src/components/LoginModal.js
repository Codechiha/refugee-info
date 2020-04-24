import React, { Component } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';


const Styles = styled.div`
    .login-container {
        color: black;
        display: flex;
        flex-flow: column;
        height
    }

    .login-options {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100px;

        p {
            margin-bottom: 0;
        }
    }

    .login-button {
        width: 132px;
        margin: 0 auto;
        margin-top: 20px;
    }

    .confirm {
        margin-top: 15px;
    }

    .signup {
        display: flex; 
        flex-direction: row;
    }
`

class LoginModal extends Component{
    state = {
        login: {
            username: '',
            password: ''
        },
        register: {
            username: '',
            password: '',
            
        },
        confirm: '',
        registerModal: false,
    };

    handleLoginChanges = e => {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        });
        console.log('login', e.target.value)
    };

    handleRegisterChanges = e => {
        this.setState({
            register: {
                ...this.state.register,
                [e.target.name]: e.target.value
            }
        });
        console.log('register', e.target.value)
    };


    handleConfirmChanges = e => {
        this.setState({
                [e.target.name]: e.target.value
        });
        console.log('confirm', e.target.value)
    };

    handleLoginSubmit = event => {
        event.preventDefault();
        
        const endpoint = 'https://ancient-ocean-58774.herokuapp.com/login';

        axios
            .post(endpoint, this.state.login)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                // //below code redirects user upon successful login
                
                this.props.login()
                this.props.onHide()
                console.log(this.props.loggedIn)
            
            })
            .catch(err => {
                console.log(err);
                alert('Username and/or Password combination is incorrect')
            })
    };

    handleRegisterSubmit = event => {
        event.preventDefault();
        if(this.state.register.password == this.state.confirm){
        axios
            .post('https://ancient-ocean-58774.herokuapp.com/register', this.state.register)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                // localStorage.setItem('isLoggedIn', true);
                // //below code redirects user upon successful login
                this.setState({
                    registerModal: false,
                })
                alert(`Registration Successful, Welcome ${this.state.register.username} Please Sign-in`)
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            alert('here')
        }
    };

    showRegister = () => {
        this.setState({
            registerModal: !this.state.registerModal
        })
    };

    render(){
        return(
            <div>
                {this.state.registerModal ? (
            <Modal
                {...this.props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Registration
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                    <Styles>
                        <div >
                            <form onSubmit={this.handleRegisterSubmit} className='login-container'>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                                    <Input 
                                        name="username"
                                        placeholder="Please Enter a Username"
                                        type="text"
                                        onChange={this.handleRegisterChanges}
                                        value={this.state.register.username} 
                                    />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                                    <Input
                                        name="password" 
                                        placeholder="Enter a Password" 
                                        type="password" 
                                        step="1"
                                        onChange={this.handleRegisterChanges}
                                        value={this.state.register.password} 
                                    />
                                </InputGroup>
                                <InputGroup className='confirm'>
                                    <InputGroupAddon addonType="prepend">Confirm</InputGroupAddon>
                                        <Input
                                            name="confirm" 
                                            placeholder="Confirm Password" 
                                            type="password" 
                                            step="1"
                                            onChange={this.handleConfirmChanges}
                                            value={this.state.confirm} 
                                        />
                                </InputGroup>
                                    <button onClick={this.handleRegisterSubmit} className='login-button'>Register</button>
                                    <button onClick={() => {this.showRegister()}}>Sign-In</button>=
                            </form>
                        </div>
                    </Styles>
                    </Container> 
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>) : 
            (<Modal
                {...this.props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                    <Styles>
                        <div >
                            <form onSubmit={this.handleLoginSubmit} className='login-container'>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                                    <Input 
                                        name="username"
                                        placeholder="type a username"
                                        type="text"
                                        onChange={this.handleLoginChanges}
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
                                        onChange={this.handleLoginChanges}
                                        value={this.state.login.password} 
                                    />
                                </InputGroup>
                                <div className='login-options'>
                                    <button className='login-button'>Login</button>
                                    <button onClick={() => {this.showRegister()}}>Sign-Up</button>
                                </div>
                            </form>
                        </div>
                    </Styles>
                    </Container> 
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>)}
            </div>
        ) }
    }


export default LoginModal;