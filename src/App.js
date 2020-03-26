import React from 'react';

//Router
import {Route, NavLink} from 'react-router-dom';

//Design
import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';

//Components
import Home from './components/Home';
import LoginModal from './components/LoginModal';
import StoryListView from './components/StoryListView';
import StoryForm from './components/StoryForm';

const Styles = styled.div`
    .nav-container {
        margin: 0 auto;
        padding: 0.7rem;
        justify-content: space-between;
        align-items: center;
        display: flex;
    }

    .nav {
        display: flex;
        flex-direction: row;
        width: 45%;
        justify-content: flex-end;
        align-items: center;

    }

    .nav-links {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        margin-right: 10%;
        width: 55%;
    }

    .log-btn {
        display: flex;
        justify-content: flex-end;
    }
`

// This Component Compiles all the separate components
function Nav(props){
    return(
        <Styles>
            <div className='nav-container'>
                <NavLink exact to="/">Refugee Stories </NavLink>
                <div className="nav">
                    <div className='nav-links'>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/stories">Stories</NavLink>
                        {props.loggedIn ? 
                            <NavLink to="/story-form">Share</NavLink> : 
                            null }
                    </div>
                
                    {props.loggedIn ? 
                        <button onClick={props.logout} className='log-btn'>Logout</button> :
                        <button onClick={props.onShow} className='log-btn'>Login</button>}
                </div>
            </div>
        </Styles>
    )
}

class App extends React.Component {
    state = {
        modalShow: false,
        isLoggedIn: false
    }

    setModalShow = (bool) => {
        bool = !this.state.modalShow
        this.setState({
            modalShow: bool
        })
    }

    login = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    logout = () => {
        console.log('log out');
        localStorage.clear();
        this.setState({isLoggedIn: false});
        document.location.reload(true)
    }
    
    render(){
        // const [modalShow, setModalShow] = React.useState(false);
        return (
            <div>
                <Nav 
                    onShow={() => this.setModalShow(true)}
                    logout={() => this.logout()}
                    loggedIn={this.state.isLoggedIn}
                />
                <LoginModal 
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                    login={this.login}
                />
                <Route exact path = "/"
                    render={props => <Home {...props} /> }
                />
                <Route path = '/stories' 
                    render={props => <StoryListView {...props}/> }
                />
                <Route path = '/story-form'
                    render={props => <StoryForm {...props} /> }
                />
            </div>
        )
    }
}

export default App;