import React from "react";
import "./Books.css";

export default class Books extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="books_container">
				<tr>
					<th>Title</th>
					<th>Author</th>
				</tr>
				<tr>
					<td>Jahl</td>
					<td>Yashar</td>
				</tr>
				<tr>
					<td>Jahl</td>
					<td>Yashar</td>
				</tr>
				<tr>
					<td>Jahl</td>
					<td>Yashar</td>
				</tr>
				<tr>
					<td>Jahl</td>
					<td>Yashar</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Yashar</td>
				</tr>
			</div>
		);
	}
}
