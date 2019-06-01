import {GetCommentsSuccess} from "../actions/comments.actions";

export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string;
}

export interface ICommentsState {
    comments: IComment[];
}

const initialState: ICommentsState = {
    comments: []
};

const commentsReducer = (state: ICommentsState = initialState, action: any) => {
    const newState = {...state};

    switch (action.type) {
        case GetCommentsSuccess().type:
            newState.comments = action.comments;
            break;
    }
    return newState;
};

export default commentsReducer;

