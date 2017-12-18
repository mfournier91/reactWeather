const React = require('react');
const ReactDOM = require('react-dom');

class FormContainer extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <h1 className="header">Enter a city and state</h1>
                <div className="searchContainer">
                <input type="text" className="form-control" placeholder="College Park, Maryland"/>
                <button className="btn btn-success">Get Weather</button>
                </div>
            </div>

        );
    }
}

module.exports = FormContainer;
