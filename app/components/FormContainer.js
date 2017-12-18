const React = require('react');
const ReactDOM = require('react-dom');
const SearchForm = require('./SearchForm.js')

class FormContainer extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <h1 className="header">Enter a city and state</h1>

                <SearchForm direction="column" />
            </div>

        );
    }
}

module.exports = FormContainer;
