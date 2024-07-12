import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header'
import AddForm from './components/AddForm/AddForm'


// FIRST WAY TO USE REACT
// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// );

// SECOND WAY TO USE REACT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <Header />

        <AddForm />

    </React.Fragment>
);