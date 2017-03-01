const React = require('react');
const ReactRouter = require('react-router');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const history = ReactRouter.hashHistory;

const Main = require('../components/Main');
const Home = require('../components/Home');
const PromptContainer = require('../containers/PromptContainer');

const routes = (
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerOne" header="Player One" component={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;
