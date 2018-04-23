const React = require('react');
const ReactDOM = require('react-dom');
const Axios = require('axios');
const secretKey = require('./Config').apiKey;
const helpers = require('../helpers/helpers.js')
const Loading = require('./Loading')
const ForecastItem = require('./ForecastItem')

class Forecast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            forecast: null
        }
    }
    componentDidMount(){
        console.log("mounted")
        let city = helpers.getQueryVariable("city")
        Axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&type=accurate&APPID=' + secretKey).then((res) => {
                console.log(res);
                this.setState( () =>{
                    return {loading: false, forecast: res}
                })
        }).catch((err)=> {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="forecast-container">
                {this.state.loading ? <Loading text="Loading" speed={300}/>: this.state.forecast.data.list.filter((e, i) => i % 8 == 0).map(dailyForecast => {
                    return (
                        <ForecastItem key={dailyForecast.dt} dt={dailyForecast.dt} icon={dailyForecast.weather[0].icon}/>
                    )
                })}

            </div>
        );
    }
}

module.exports = Forecast;
