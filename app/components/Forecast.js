const React = require('react');
const ReactDOM = require('react-dom');
const Axios = require('axios');
const secretKey = require('./Config').apiKey;
const helpers = require('../helpers/helpers.js')
const Loading = require('./Loading')

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
        Axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + secretKey).then((res) => {
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
            <div>
                {/*<Loading text="Loooading girl" speed={300}/>*/}
                {this.state.loading ? <Loading text="Loading" speed={300}/>: <p>{this.state.forecast.data.weather[0].main}</p>}
            </div>
        );
    }
}

module.exports = Forecast;
