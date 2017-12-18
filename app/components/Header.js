const React = require('react');
const ReactDOM = require('react-dom');

class Header extends React.Component {
    render() {
        return (
            <nav className="nav"><h1>Main Header</h1></nav>
        );
    }
}

module.exports = Header;
