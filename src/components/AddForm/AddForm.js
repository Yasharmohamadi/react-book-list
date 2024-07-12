import React from "react";
import "./AddForm.css";
import Books from "../Books/Books";

export default class AddForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			author: "",
			books: [],
		};

		this.inputTitleHnadler = this.inputTitleHnadler.bind(this);
		this.inputAuthorHnadler = this.inputAuthorHnadler.bind(this);
		this.submitHnadler = this.submitHnadler.bind(this);
	}

	submitHnadler(event) {
		event.preventDefault();

		let bookID = this.state.books.length + 1;
		let { title, author } = this.state;

		if (title && author) {
			let newBook = { id: bookID, title, author };

			this.setState({
				books: [...this.state.books, newBook],
				title: "",
				author: "",
			});
		}
	}

	inputTitleHnadler(event) {
		this.setState({
			title: event.target.value,
		});
	}

	inputAuthorHnadler(event) {
		this.setState({
			author: event.target.value,
		});
	}

	render() {
		return (
			<form className="add-form" onSubmit={this.submitHnadler}>
				<div className="title">
					<label className="title_label label" htmlFor="title">
						Title :
					</label>
					<input
						className="title_input input"
						id="title"
						maxLength={30}
						onChange={this.inputTitleHnadler}
						value={this.state.title}
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
						onChange={this.inputAuthorHnadler}
						value={this.state.author}
					></input>
				</div>

				<button className="button">Add Book</button>

				<table className="books_container">
					<thead>
						<tr>
							<th>Title</th>
							<th>Author</th>
						</tr>
					</thead>
					<tbody>
						{this.state.books.map((book) => (
							<Books {...book} key={book.id} />
						))}
					</tbody>
				</table>
			</form>
		);
	}
}
