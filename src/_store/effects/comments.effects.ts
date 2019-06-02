import {GetComments, GetCommentsSuccess} from "../actions/comments.actions";
import {ActionsObservable} from "redux-observable";
import Axios from "axios-observable";
import {filter, map, switchMap} from 'rxjs/operators';

export const commentsEffect = (action$: ActionsObservable<any>) => action$.pipe(
    filter((action: { type: string }) => action.type === GetComments.Pending),
    switchMap(() => Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
        .pipe(
            map((data: any) => GetCommentsSuccess(data.data))
        )
    )
);
