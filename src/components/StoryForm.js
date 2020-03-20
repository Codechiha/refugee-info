import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class StoryForm extends React.Component {
    state = {
       story: {
           title: '',
            text: '',
        }
    }

    handleChanges = e => {
        this.setState({
            story: {
                ...this.state.story,
                [e.target.name]: e.target.value
            }
        });
        console.log('story', e.target.value)
    };

    addStory = event => {
        event.preventDefault();
        
        const endpoint = 'https://ancient-ocean-58774.herokuapp.com/stories';
        axios
            .post(endpoint, this.state.story)
            .then(res => {
                console.log('response', res.data.token)
            })
            .catch(err => {
                console.log('story error', err);
            })
    };

    render(){
        return(
            <div className="StoryForm">
            <Form>
                <FormGroup>
                    <Label for="name-title">Title</Label>
                    <Input 
                        type="text" 
                        name="title" 
                        placeholder="Include Name and Country, Anonymous accepted" 
                        onChange={this.handleChanges}
                        value={this.state.story.title}
                        />
                </FormGroup>
            
                <FormGroup>
                    <Label for="submission-text">Share your story</Label>
                    <Input 
                        type="textarea" 
                        name="text" 
                        placeholder="..."
                        onChange={this.handleChanges}
                        value={this.state.story.text}
                    />
                </FormGroup>
                <Button onClick={this.addStory}>Submit</Button>
           
            </Form>

        </div>

        )
    }
}

export default StoryForm;