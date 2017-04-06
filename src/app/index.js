import React from "react";
import {render} from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";


class App extends React.Component {
    render() {
    	console.log(browserHistory)
        return (
            <Router history={browserHistory}>
      			<Route path={"/"} component={Root}>
         			<IndexRoute component={Home}></IndexRoute>
         			<Route path="home" component={Home} />
         			<Route path="user" component={User} />
			    </Route>
   			</Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
