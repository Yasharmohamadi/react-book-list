import './Header.css'
import React from 'react' 

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>Book List</h1>
        )
    }
}