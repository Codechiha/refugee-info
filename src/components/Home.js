import React, { Component } from 'react';

//Images
import background from '../assets/dcenter.jpg';
import jchan from '../assets/jchan.jpg';
import einstein from '../assets/albert-einstein.jpg';
import jesus from '../assets/jesus.jpg';
import trapp from '../assets/vontrapp.jpg';

//Design
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .header-img {
        position: relative;
        left: 0;
        right: 0;
        z-index: -1;
        filter: grayscale(100%) brightness(250%) contrast(100%);
      
        display: block;
        background-image: url(${background});
        background-size: cover;
        background-position-x: 50%;
        min-height: calc(100vh - var(--navbar-height));
        height: 600px;
    }

    .box {
        z-index: 1;
        border: 1px solid red;
        color: red;
        filter: none;
        background-color: blue;
        opacity: 80%;
        position: fixed;
        right: 100px;
        top: 100px;
    }

    
    main {
        color: var(--vermillion);
    }
    
    section {
        margin-top: 2rem;
    }
    
    main h2 {
        display: flex;
        align-items: center;
        margin: 2rem 0;
    }
    
    main h2::after {
        content: "";
        display: inline-block;
        width: 100%;
        border-top: 1px dotted var(--vermillion);
        margin: 0 1rem;
    }

    .facts li {
        background: var(--clean);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--vermillion);
        margin-bottom: 1rem;
    }
    
    @media(min-width: 600px) {
        .facts ul {
        display: inline-grid;
        grid-auto-flow: column;
        grid-gap: 1rem;
        overflow: scroll;
        }
        .facts li {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        }
        .facts li * {
        align-self: flex-start;
        }
        .facts li a {
        align-self: flex-end;
        }
    }

    .famous-img {
        width: 200px;
    }
  
`


class Content extends Component {
    render() {
        return(
            <Styles>
                <Container class="container">
                    <section class="facts" id="facts">
                            <h3>What is a Refugee?</h3>
                            <p>A refugee is someone who has been forced to flee his or her country because of persecution, war, or violence. 
                                A refugee has a well-founded fear of persecution for reasons of race, religion, nationality or political opinion.
                                </p>
                            <h3>Reasons for Displacement</h3>
                            <p>Individuals and families seek asylum and safe refuge because they have fled violence, persecution, war, or natural disaster.2 Some refugees have contended with more than one of these factors at once.</p>

                            <h3>Some Famous Refugees</h3>
                            <h4>Jackie Chan</h4>
                            <p> Fled to the US from Hong Kong after being threatened with Death by the Triads</p>
                            <img className='famous-img' src={jchan}></img>
                            <h4>Albert Einstein</h4>
                            <p>One of the world's most famous scientists, was a German-Jewish refugee</p>
                            <img className='famous-img' src={einstein}></img>
                            <h4>Jesus</h4>
                            <p>His family fled from the holy land because of King Herod</p>
                            <img className='famous-img' src={jesus}></img>
                            <h4>Georg Ritter von Trapp</h4>
                            <p>Father of the Trapp family, whose story inspired the Sound of Music, fled Nazi occupied Austria</p>
                            <img className='famous-img' src={trapp}></img>
                            
                    </section>
                </Container>
            </Styles>
        )
    }
}

class Home extends Component {
    state ={
        show: false
    };

    showLogin = event => {
        this.setState({
            show: true
        })
    }
    render() {
        return (
            <Styles>
                <div className='header-img'>  
                </div>
                <Content />
            </Styles>
        )
    }
}

export default Home;