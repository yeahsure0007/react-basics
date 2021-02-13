import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import BlogStyles from './Blog.module.css';
//import axios from 'axios';
import axios from '../../Axios';

/*
 Use the API https://jsonplaceholder.typicode.com/posts to get sample data
 Retrieve the posts here and display top 5 of them.
 Make the post selectable.
 Pass the post id selected to the FullPost element.
 Add error handling too.
*/
class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        hasError: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const finalPosts = response.data.slice(0, 4);
                const updatedPosts = finalPosts.map(post => {
                    return {...post, author: 'CVR'}
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                this.setState({hasError: true});
            });
    }

    postClickHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!!</p>
        if(!this.state.hasError) {
            posts = this.state.posts.map(post => {
                return <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postClickHandler(post.id)}/>
            });
        }
        return (
            <div>
                <section className={BlogStyles.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;