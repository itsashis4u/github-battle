import React, { Component } from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      scores: []
    };
  }

  componentDidMount() {
    const playersInfo = this.props.location.state.playersInfo;

    githubHelpers.battle(playersInfo)
    .then((scores) => {
      this.setState({
        isLoading: false,
        scores
      });
    });
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}
      />
    );
  }
}

export default ResultsContainer;
