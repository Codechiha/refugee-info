import React from 'react';

//Router
import {Route, NavLink} from 'react-router-dom';

//Design
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

//Components
import Home from './components/Home';
import LoginModal from './components/LoginModal';
import StoryListView from './components/StoryListView';
import StoryForm from './components/StoryForm';

const Styles = styled.div`
    .nav-container {
        max-width: 95vw;
        width: 800px;
        margin: 0 auto;
        padding: 0.5rem 0;
        justify-content: space-between;
        align-items: bottom;
        display: flex;
    }

    .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        border: 1px solid red;
        width: 200px;
    }
`

// This Component Compiles all the separate components
function Nav(props){
    return(
        <Styles>
            <div className='nav-container'>
                <NavLink exact to="/">Refugee Stories </NavLink>
                <div className="nav">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/stories">Stories</NavLink>
                    {props.loggedIn ? 
                        <NavLink to="/story-form">Share</NavLink> : 
                        null }
                </div>
                {props.loggedIn ? 
                    <Button onClick={props.logout}>Logout</Button> :
                    <Button onClick={props.onShow}>Login</Button>}
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