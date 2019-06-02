import {GetPosts} from '../actions/posts.actions';
import {ActionsObservable} from "redux-observable";
import {filter, map, switchMap} from 'rxjs/operators';
import Axios from "axios-observable";
import {IPost} from "../reducers/posts.reducer";
import {Action} from "redux-actions";


export const postsEffect = (action$: ActionsObservable<Action<IPost[]>>) => action$.pipe(
    filter((action: { type: string }) => action.type === GetPosts.Pending),
    switchMap(() => Axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .pipe(
            map((data: {data: IPost[]}) => ({type: GetPosts.Success, payload: data.data}))
        )
    )
);
