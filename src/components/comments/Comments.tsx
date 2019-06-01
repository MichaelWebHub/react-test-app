import React, {Component} from 'react';
import {IComment, ICommentsState} from "../../_store/reducers/comments.reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {GetCommentsPending} from "../../_store/actions/comments.actions";
import './Comments.scss'

type ICommentProps = {
    comments: IComment[];
    getCommentsPending: Function;
}

class Comments extends Component<ICommentProps> {

    componentDidMount(): void {
        this.props.getCommentsPending();
    }

    render() {
        return (
            <div className="comments">
                {
                    this.props.comments.map((comment: IComment) => {
                        return this.props.comments.length ? <p className="comment" key={comment.id}>{comment.body}</p> :
                            <p> No comments :( </p>;
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state: { commentsReducer: ICommentsState }) => {
    return {
        comments: state.commentsReducer.comments
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getCommentsPending: () => dispatch(GetCommentsPending())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);
