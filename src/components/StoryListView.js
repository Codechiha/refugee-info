import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

// const Styles = styled.div`

// `

class StoryListView extends React.Component {
    state = {
        stories: [],
    };

   componentDidMount(){
       axios
        .get('https://ancient-ocean-58774.herokuapp.com/stories')
        .then(res => {
            const s = res.data.s;
            this.setState({stories: s})
        })
    }

    render() {
        return (
            <Container>
                {this.state.stories.map((story) => 
                    <div>
                        <h4>{story.title}</h4>
                        <p>{story.text}</p>
                    </div>
                    )}
            </Container>
        );
    }
}


export default StoryListView;