const React = require('react');
const ReactDOM = require('react-dom');

class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text,
            speed: this.props.speed
        }
    }
    componentDidMount(){
        var stopper = this.props.text + '...';
        this.interval = window.setInterval(() => {
            if (this.state.text === stopper){
                this.setState(() => {return { text: this.props.text}})
            }
            else {
                this.setState((prevState) => {return {text: prevState.text + '.'}})
            }
        }, this.props.speed)
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}

module.exports = Loading