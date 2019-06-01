import {GetPostsSuccess} from "../actions/posts.actions";

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

const postsReducer = (state: IPostsState = initialState, action: any) => {
    const newState = {...state};

    switch (action.type) {
        case GetPostsSuccess().type:
            newState.posts = action.posts;
            break;
    }
    return newState;
};

export default postsReducer;
