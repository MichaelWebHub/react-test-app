import {GetPosts} from "../actions/posts.actions";
import {handleActions} from 'redux-actions';

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPostsState {
    posts: IPost[]
}

const initialState: IPostsState = {
    posts: []
};

const postsReducer = handleActions(
    {
        [GetPosts.Success]: (state: IPostsState, action: any) => ({
            posts: action.posts
        })
    },
    initialState
);

export default postsReducer;
