const React = require('react');
const ReactDOM = require('react-dom');

class ForecastItem extends React.Component {
    render(){
        return (
            <div className="forecastItem">
                <img src={"../app/images/weather-icons/"+this.props.icon+".svg"} alt="weather" style={{height: "130px"}}/>
                <h2 className="subhead">{new Date(this.props.dt*1000).toDateString().split(' ').slice(0,3).join(' ')}</h2>
            </div>
        )
    }
}

module.exports = ForecastItem