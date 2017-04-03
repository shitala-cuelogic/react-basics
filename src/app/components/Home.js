import React from "react";

export class Home extends React.Component {

	constructor(props) {
		super();
		this.state = { 
			age: props.initialAge, 
			status: 0
		};
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	render() {
		return(
			<div>
				<p>In a new Component!</p>
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<button  onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
			</div>	
		);
	}

}

//Type of propertise(props)
Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
};