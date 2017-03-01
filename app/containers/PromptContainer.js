const React = require('react');

class PromptContainer extends React.Component {
  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>Some header</h1>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="GitHub Username" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-success">Continue</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = PromptContainer;
