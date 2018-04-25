const React = require('react');
const ReactDOM = require('react-dom');
const ForecastItem = require('./ForecastItem');
const helpers = require('../helpers/helpers')

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            df: this.props.location.state.dailyForecast,
            city: helpers.initialsToUpper(decodeURIComponent(this.props.location.state.city))
        }
    }

    componentDidMount() {
        console.log(this.state.df)
    }

    render() {
        return (
            <div className="forecastItem">
                <ForecastItem  key={this.state.df.dt} dt={this.state.df.dt} icon={this.state.df.weather[0].icon}/>
                <h2>{this.state.city}</h2>
                <h3>{this.state.df.weather[0].description}</h3>
                <h3>Min temp: {helpers.kelvinToFahrenheit(this.state.df.main.temp_min)}</h3>
                <h3>Max temp: {helpers.kelvinToFahrenheit(this.state.df.main.temp_max)}</h3>
                <h3>Humidity: {this.state.df.main.humidity}</h3>
            </div>
        );
    }
}

module.exports = Detail;