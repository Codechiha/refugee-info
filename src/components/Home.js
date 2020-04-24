import React, { Component } from 'react';

//Images
import background from '../assets/refugee.jpg';
import jchan from '../assets/jchan.jpg';
import einstein from '../assets/albert-einstein.jpg';
import jesus from '../assets/jesus.jpg';
import trapp from '../assets/vontrapp.jpg';

//Design
import styled from 'styled-components';
import { Container, Row, Col, Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';

const Styles = styled.div`

    h3 {
        padding-bottom: 25px;
        border-bottom: 1px solid lightgray;
    }

    .header-img {
        position: relative;
        left: 0;
        right: 0;
        z-index: -1;
      
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

    .facts {
        display: flex;
        flex-direction: column;
        margin: 14px 0;
    }

    .col {
        border: 1px solid lightgray;
        border-radius: 2%;
        padding: 60px;
        margin: 14px 0;

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

    .carousel {
        p {
            color: white;
        }
    }
  
`


class Content extends Component {
    render() {
        return(
            <Styles>
                <Container className="container" fluid='lg'>
                    <Row className="facts" id="facts">
                        <Col className='col'>
                            <h3>What is a Refugee?</h3>
                            <p>A refugee is someone who has been forced to flee his or her country because of persecution, war, or violence. 
                                A refugee has a well-founded fear of persecution for reasons of race, religion, nationality or political opinion.
                            </p>
                        </Col>
                        <Col className='col'>
                            <h3>Reasons for Displacement</h3>
                            <p>Individuals and families seek asylum and safe refuge because they have fled violence, persecution, war, or natural disaster.2 Some refugees have contended with more than one of these factors at once.</p>
                        </Col>
                        </Row>             
                        <Carousel className='carousel'>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={jchan}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>Jackie Chan</h3>
                                <p>An international household name as an action movie star who does his own stunts with a loveable accent. Fled to the US from Hong Kong after being threatened with Death by the Triads</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={einstein}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Albert Einstein</h3>
                                <p>
                                    One of the world's most famous scientists, was a German-Jewish refugee</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={trapp}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Georg Ritter Von Trappe</h3>
                                <p>Father of the Trapp family, whose story inspired the Sound of Music, fled Nazi occupied Austria</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={jesus}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Jesus</h3>
                                <p>Matthew 2:13-15, referring to Jesus as the child, {'\n'}
                                    13 ...an angel of the Lord appeared to Joseph in a dream. “Get up,” he said, “take the child and his mother and escape to Egypt. Stay there until I tell you, for Herod is going to search for the child to kill him."</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
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