import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles';

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function ConfirmBattle(props) {
  return props.isLoading === true ?
    <p>Loading...</p> :
    (<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-6">
          <p className="lead">Player 1</p>
          {puke(props.playersInfo[0])}
        </div>
        <div className="col-sm-6">
          <p className="lead">Player 2</p>
          {puke(props.playersInfo[1])}
        </div>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>Initiate Battle</button>
        </div>
        <div className="col-sm-12" style={styles.space}>
          <Link to="/playerOne">
            <button className="btn btn-lg btn-warning">Reselect Players</button>
          </Link>
        </div>
      </div>
    </div>
    );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  onInitiateBattle: PropTypes.func.isRequired
};
export default ConfirmBattle;
