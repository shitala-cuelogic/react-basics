import React from "react";
import { render } from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home"
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

    render() {
        return (
        	<div className="container">
        		<div className="row">
        			<div className="col-xs-10 colxs-offset-1">
        				<Header homeLink={this.state.homeLink}/>
        			</div>
        		</div>
        		<div className="row">
        			<div className="col-xs-10 colxs-offset-1">
        				{/*Attribute can be access useing this.props.attributeName */}
        				<Home name={"Max"} initialAge={29} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)}/>
        			</div>
        		</div>
        	</div>
        );
    }
}


render(<App/>, window.document.getElementById("app"));


