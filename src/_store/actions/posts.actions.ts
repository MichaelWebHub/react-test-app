import {IPost} from "../reducers/posts.reducer";

export const GetPostsPending = () => {
    return {
        type: '[Pending] Get all-posts'
    }
};

export const GetPostsSuccess = (posts?: IPost[]) => {
    return {
        type: '[Success] Get all-posts',
        posts
    };
};
