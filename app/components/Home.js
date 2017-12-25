const React = require('react');
const ReactDOM = require('react-dom');
const FormContainer = require('./FormContainer')

class Home extends React.Component {
    render() {
        return (
            <div>
                <FormContainer />
            </div>
        );
    }
}

module.exports = Home;
