const React = require('react');
const transparentBg = require('../styles').transparentBg;

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
  header: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};

module.exports = Prompt;
