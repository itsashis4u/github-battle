import React from 'react';
import { Link } from 'react-router';
import { transparentBg } from '../styles';

const Home = () => (
  <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
    <h1>GitHub Battle</h1>
    <p className="lead">Some fancy motto</p>
    <Link to="playerOne">
      <button className="btn btn-lg btn-success">Get started</button>
    </Link>
  </div>
);

export default Home;
