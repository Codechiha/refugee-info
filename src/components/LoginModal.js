import React, { Component } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';

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

class LoginModal extends Component{
    state = {
        login: {
            username: '',
            password: ''
        },
        register: {
            username: '',
            password: ''
        },
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

    handleLoginSubmit = event => {
        event.preventDefault();
        
        const endpoint = 'https://ancient-ocean-58774.herokuapp.com/login';

        axios
            .post(endpoint, this.state.login)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                // //below code redirects user upon successful login
                // window.location = "#/approvals";
                this.props.login()
                console.log(this.props.loggedIn)
            
            })
            .catch(err => {
                console.log(err);
                window.location = "/";
            })
    };

    handleRegisterSubmit = event => {
        event.preventDefault();

        axios
            .post('https://ancient-ocean-58774.herokuapp.com/register', this.state.register)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                // localStorage.setItem('isLoggedIn', true);
                // //below code redirects user upon successful login
                // window.location = "#/approvals";
                // this.props.loggedIn = true
                // console.log(this.props.loggedIn)
                // document.location.reload(true);
            
            })
            .catch(err => {
                console.log(err);
            })
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
                        Heading
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
                                <Button color="secondary" className='login-button'>Register</Button>
                                <p>If you have an Account <span onClick={() => {this.showRegister()}}>Sign-In</span></p>
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
                        Heading
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
                                <Button color="secondary" className='login-button'>Log-in</Button>
                                <p>Or Create an Account <button onClick={() => {this.showRegister()}}>Sign-Up</button></p>
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