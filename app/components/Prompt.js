import React, { PropTypes } from 'react';
import { transparentBg } from '../styles';

function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
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
    </div>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Prompt;
