import React from "react";
import "./AddForm.css";

export default class AddForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(event) {
	}

	render() {
		return (
			<div className="add-form">
				<div className="title">
					<label className="title_label label" htmlFor="title">
						Title :
					</label>
					<input
						className="title_input input"
						id="title"
						maxLength={30}
					></input>
				</div>

				<div className="author">
					<label className="author_label label" htmlFor="author">
						Author :
					</label>
					<input
						className="author_input input"
						id="author"
						maxLength={30}
					></input>
				</div>

				<button className="button" onClick={this.clickHandler}>
					Add Book
				</button>
			</div>
		);
	}
}
