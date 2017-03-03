import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import styles from '../styles';
import MainContainer from './MainContainer';
import Loading from './Loading';

function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button className="btn btn-lg btn-danger">Start Over!</button>
      </Link>
    </div>
  );
}

function Results(props) {
  if (props.isLoading) {
    return <Loading />
  }
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie</h1>
        <StartOver />
      </MainContainer>
    );
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex ? 0 : 1;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails info={props.playersInfo[winningIndex]} score={props.scores[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails info={props.playersInfo[losingIndex]} score={props.scores[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
    );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  scores: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Results;
