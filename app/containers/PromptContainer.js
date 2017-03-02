import React, { Component, PropTypes } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
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
          playerTwo: username
        }
      });
    } else {
      this.context.router.push(`/playerTwo/${username}`);
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
}

PromptContainer.contextTypes = {
  router: PropTypes.object.isRequired
};


export default PromptContainer;
