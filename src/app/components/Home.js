import React from "react";

export class Home extends React.Component {

	constructor(props) {
		super();
		this.state = { 
			age: props.initialAge, 
			status: 0,
			homeLink: "Changed Link"
		};
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	render() {
		return(
			<div>
				<p>In a new Component!</p>
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<button  onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
				<hr />
				<button className="btn btn-primary" onClick={this.props.greet}>Greet </button>
				<hr />
				<button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link </button>
			</div>	
		);
	}

}

//Type of propertise(props)
Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	greet: React.PropTypes.function
};