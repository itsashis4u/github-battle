import React, { Component, PropTypes } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

class ConfirmBattleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playerInfo: []
    };
  }

  componentDidMount() {
    const query = this.props.location.query;
    // Fetch info from GitHub
  }

  render() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playerInfo={this.state.playerInfo} />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ConfirmBattleContainer;
