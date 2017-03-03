import React, { PropTypes } from 'react';
import MainContainer from './MainContainer';
import styles from '../styles';

function Prompt(props) {
  return (
    <MainContainer>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="GitHub Username"
              onChange={props.handleChange}
              value={props.username}
            />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success">Continue</button>
          </div>
        </form>
      </div>
    </MainContainer>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Prompt;
