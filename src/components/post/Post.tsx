import React  from 'react';
import {IPost} from "../../_store/reducers/posts.reducer";
import './Post.scss';

type IPostProps = {
    post: IPost;
}

const Post: React.FC<IPostProps> = ({post}) => {
    return (
        <div className="post">
            <h3 className="post__title"> {post.title} </h3>
            <p className="post__body"> {post.body} </p>
        </div>
    )
};

export default Post;
