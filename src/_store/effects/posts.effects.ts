import {GetPostsPending, GetPostsSuccess} from '../actions/posts.actions';
import {ActionsObservable} from "redux-observable";
import {filter, map, switchMap} from 'rxjs/operators';
import Axios from "axios-observable";


export const postsEffect = (action$: ActionsObservable<any>) => action$.pipe(
    filter((action: { type: string }) => action.type === GetPostsPending().type),
    switchMap(() => Axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .pipe(
            map((data: any) => GetPostsSuccess(data.data))
        )
    )
);
