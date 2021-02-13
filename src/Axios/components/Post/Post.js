import React from 'react';
import PostStyles from './Post.module.css';

const post = (props) => (
    <article className={PostStyles.Post} onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className={PostStyles.Info}>
            <div className={PostStyles.Author}>{props.author}</div>
        </div>
    </article>
);

export default post;