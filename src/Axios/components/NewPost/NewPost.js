import React, { Component } from 'react';
import NewPostStyles from './NewPost.module.css';
import axios from 'axios';

/*
 Make changes to send the post request when user selects Add Post.
*/
class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'CVR'
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', post)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div className={NewPostStyles.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="CVR">CVR</option>
                    <option value="Commvault">Commvault</option>
                </select>
                <button onClick={() => this.postDataHandler()}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;