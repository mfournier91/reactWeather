const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./Header');
const FormContainer = require('./FormContainer')

class App extends React.Component {
    render() {
        return (
            <div className="appContainer" style={{backgroundImage: "url('app/images/pattern.svg')" }}>
              <Header />
              <FormContainer />
            </div>
        );
    }
}

module.exports = App;
