import React from 'react';
import { Link } from 'react-router';
import MainContainer from './MainContainer';

function Home() {
  return (
    <MainContainer>
      <h1>GitHub Battle</h1>
      <p className="lead">Some fancy motto</p>
      <Link to="playerOne">
        <button className="btn btn-lg btn-success">Get started</button>
      </Link>
    </MainContainer>
  );
}

export default Home;
