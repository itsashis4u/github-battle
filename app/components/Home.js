const React = require('react');
const transparentBg = require('../styles').transparentBg;
const ReactRouter = require('react-router');

const Link = ReactRouter.Link;

const Home = () => (
  <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
    <h1>GitHub Battle</h1>
    <p className="lead">Some fancy motto</p>
    <Link to="playerOne">
      <button className="btn btn-lg btn-success">Get started</button>
    </Link>
  </div>
);

module.exports = Home;
