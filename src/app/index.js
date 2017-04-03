import React from "react";
import { render } from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";


class App extends React.Component {
    render() {
    	let user = {
    		name: "Anna",
    		hobbies: ["Sports", "Reading"]
    	}
        return (
        	<div className="container">
        		<div className="row">
        			<div className="col-xs-10 colxs-offset-1">
        				<Header/>
        			</div>
        		</div>
        		<div className="row">
        			<div className="col-xs-10 colxs-offset-1">
        				{/*Attribute can be access useing this.props.attributeName */}
        				<Home name={"Max"} age={29} user={user}>
        					{/*This can be access by this.props.children in Home component*/}
        					<p>This is paragraph</p>
        				</Home>
        			</div>
        		</div>
        	</div>
        );
    }
}


render(<App/>, window.document.getElementById("app"));