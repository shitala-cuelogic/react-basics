import React from "react";
import {render} from "react-dom";
import {Route, BrowserRouter as Router} from "react-router-dom";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={"/"} component={Root}/>
                    <Route path={"/home"} component={Home}/>
                    <Route path={"/user"} component={User}/>
                </div>
            </Router>

        );
    }
}

render(<App/>, window.document.getElementById("app"));

/*import React from "react";
import { render } from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        }); 
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        let homeCmp = "";

        if (this.state.homeMounted) {
            homeCmp = (<Home name={"Max"} initialAge={29} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)}
                                    initialLinkName={this.state.homeLink}
                                    />);
        }
        return (
        	<div className="container">
        		<div className="row">
        			<div className="col-xs-10 colxs-offset-1">
        				<Header homeLink={this.state.homeLink}/>
        			</div>
        		</div>
        		<div className="row">
        			<div className="col-xs-10 colxs-offset-1">
        				{"Attribute can be access useing this.props.attributeName"}
        				{homeCmp}
        			</div>
        		</div>
                <div className="row">
                    <div className="col-xs-10 colxs-offset-1">
                        <button className="btn btn-primary" onClick={() => this.onChangeHomeMounted()}>(Un)Mount Home Component</button>
                    </div>
                </div>
        	</div>
        );
    }
}


render(<App/>, window.document.getElementById("app"));


*/