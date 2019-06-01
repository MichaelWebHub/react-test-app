import {IComment} from "../reducers/comments.reducer";

export const GetCommentsPending = () => {
    return {
        type: 'GetCommentsPending'
    }
};

export const GetCommentsSuccess = (comments?: IComment[]) => {
    return {
        type: '[Success] Get Comments',
        comments
    }
};
