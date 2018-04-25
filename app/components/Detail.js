const React = require('react');
const ReactDOM = require('react-dom');

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            df: this.props.location.state.dailyForecast
        }
    }

    componentDidMount() {
        console.log(this.state.df)
    }

    render() {
        return (
            <div>
                DETAIL!
            </div>
        );
    }
}

module.exports = Detail;