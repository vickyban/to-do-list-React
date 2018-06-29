import React, {Component} from 'react';
// import { Router, Route, IndexRoute, HashRouter} from "react-router";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todo from './components/Todo';
import About from './components/About';
import Error from './components/Error';
import Nav from './components/Navigation';

export default class App extends Component {
    render(){
        return(
            < BrowserRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route path='/' component={Todo} exact></Route>
                        <Route path='/about' component={About} ></Route>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </ BrowserRouter>
        );
    }
}