const React = require('react');
const ReactDOM = require('react-dom');
const SearchForm = require('./SearchForm')

class Header extends React.Component {
    render() {
        return (
            <nav className="nav">
                <h1>React Weather</h1>
                <SearchForm direction="row" />
            </nav>
        );
    }
}

module.exports = Header;
