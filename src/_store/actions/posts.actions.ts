import {IPost} from "../reducers/posts.reducer";
import {createActions} from 'redux-actions';

export enum GetPosts {
    Pending = '[Pending] Get all-posts',
    Success = '[Success] Get all-posts'
}

createActions({
    [GetPosts.Pending]: undefined,
    [GetPosts.Success]: (posts?: IPost[]) => posts
});
