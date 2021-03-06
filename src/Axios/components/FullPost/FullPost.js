import React, { Component } from 'react';
import FullPostSTyles from './FullPost.module.css';
import axios from 'axios';

/*
 Get individual post data and explain how to avoid infinite loops.
 Make a delete request.
*/
class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if(this.props.id) {
            if(!this.state.loadedPost || (this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                .then(response => {
                    this.setState({loadedPost: response.data});
                });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading....!</p>
        }
        if(this.state.loadedPost) {
            post = (
                <div className={FullPostSTyles.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={FullPostSTyles.Edit}>
                        <button onClick={() => this.deletePostHandler()} className={FullPostSTyles.Delete}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;