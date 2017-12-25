const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./Header')
const Home = require('./Home');
const ReactRouter = require('react-router-dom');
const Forecast = require('./Forecast')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
    render() {
        return (
            <div className="appContainer" style={{backgroundImage: "url('app/images/pattern.svg')" }}>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/forecast" component={Forecast} />
                            <Route render={() => {
                                return (<p>Not Found </p>)
                            }} />
                        </Switch>
                    </div>
              </Router>
            </div>
        );
    }
}

module.exports = App;
