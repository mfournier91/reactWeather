const React = require('react');
const ReactDOM = require('react-dom');
// const Axios = require('axios');
const ReactRouter = require('react-router-dom')
var Link = ReactRouter.Link;
// const secretKey = require('./Config').apiKey;

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityState: ""
        }
    }
    onClickHandler = (e) => {
        e.preventDefault();
        console.log('clicked ' + this.state.cityState);
        // Axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.cityState + '&type=accurate&APPID=' + secretKey).then((res) => {
        //         console.log(res)
        // }).catch((err)=> {
        //     console.log(err)
        // })
    }
    onChangeHandler = (event) => {
        this.setState({cityState: event.target.value})
    }
    render() {
        return (
            <div className="searchContainer" onChange={this.onChangeHandler} value={this.state.cityState} style={{flexDirection: this.props.direction}}>
                <input type="text" className="form-control" placeholder="College Park, Maryland"/>
                <Link className="btn btn-success" to={
                    {
                        pathname: '/forecast',
                        search: "?city=" + this.state.cityState
                    }
                } >Get Weather </Link>
            </div>

        );
    }
}

module.exports = SearchForm;