import React from "react";
import "./Books.css";

export default class Books extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr>
				<td>{this.props.author}</td>
				<td>{this.props.title}</td>
			</tr>
		);
	}
}
