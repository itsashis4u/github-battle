const React = require('react');
const transparentBg = require('../styles').transparentBg;
const Prompt = require('../components/Prompt');

class PromptContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`);
    }
  }

  render() {
    return (
      <Prompt
        header={this.props.route.header}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        username={this.state.username}
      />
    );
  }

 /* render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="GitHub Username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-success">Continue</button>
            </div>
          </form>
        </div>
      </div>
    );
  } */
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = PromptContainer;
