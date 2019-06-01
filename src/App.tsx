import React, {Component} from 'react';
import './App.scss';

import {BrowserRouter, Route} from 'react-router-dom'
import Comments from "./components/comments/Comments";
import AllPosts from "./components/all-posts/AllPosts";
import Navbar from "./components/navbar/Navbar";

class App extends Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar/>

                    <Route exact path='/posts' component={AllPosts}/>
                    <Route exact path='/comments' component={Comments}/>
                </BrowserRouter>
            </div>
        );
    }

}

export default App;
