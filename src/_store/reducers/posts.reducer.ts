import {GetPosts} from "../actions/posts.actions";
import {Action, handleActions} from 'redux-actions';

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPostsState {
    posts: IPost[]
}

export const initialState: IPostsState = {
    posts: []
};

const postsReducer = handleActions(
    {
        [GetPosts.Success]: (state: IPostsState, action: Action<IPost[]>) => ({
            posts: action.payload
        })
    },
    initialState
);

export default postsReducer;
