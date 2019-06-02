import {IComment} from "../reducers/comments.reducer";

export enum GetComments {
    Pending = '[Pending] Get Comments',
    Success = '[Success] Get Comments'
}

export const GetCommentsPending = () => {
    return {
        type: GetComments.Pending
    }
};

export const GetCommentsSuccess = (comments?: IComment[]) => {
    return {
        type: GetComments.Success,
        comments
    }
};
