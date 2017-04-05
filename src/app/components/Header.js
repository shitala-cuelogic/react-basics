import React from "react";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
	return (
		<nav className="navbar navbar-default">
			<div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><NavLink to={"/home"} activeStyle={{ color: 'red' }}>Home</NavLink></li>
						<li><NavLink to={"/user"} activeStyle={{ color: 'red' }}>User</NavLink></li>
					</ul>
				</div>
			</div>
		</nav>
	)

}





/*import React from "react";

//Stateless component
export const Header = (props) => {
	return (
		<nav className="navbar navbar-default">
			<div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li>
							<a href="#">{props.homeLink}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	); 
}*/