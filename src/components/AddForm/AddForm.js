import React from "react";
import './AddForm.css'

export default class AddForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="add-form">

                <div className="title">
                <label className="title_label label" for="title">Title :</label>
                <input className="title_input input" id="title" maxLength={30}></input>
                </div>

                <div className="author">
                <label className="author_label label" for="author">Author :</label>
                <input className="author_input input" id="author" maxLength={30}></input>
                </div>

                <button className="button">Add Book</button>

            </div>
        )
    }
}