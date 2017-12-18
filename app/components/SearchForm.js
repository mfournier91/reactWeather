const React = require('react');
const ReactDOM = require('react-dom');

class SearchForm extends React.Component {
    render() {
        return (
            <div className="searchContainer" style={{flexDirection: this.props.direction}}>
                <input type="text" className="form-control" placeholder="College Park, Maryland"/>
                <button className="btn btn-success">Get Weather</button>
            </div>

        );
    }
}

module.exports = SearchForm;