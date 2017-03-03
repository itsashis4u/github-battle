import React, { Component, PropTypes } from 'react';

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
};

class Loading extends Component {
  static get defaultProps() {
    return {
      text: 'Loading',
      speed: 300
    };
  }

  constructor(props) {
    super(props);
    this.originalText = this.props.text;
    this.state = {
      text: this.originalText
    };
  }

  componentDidMount() {
    const stopper = `${this.originalText}...`;
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: `${this.state.text}.`
        });
      }
    }, this.props.speed);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }
}

Loading.propTypes = {
  speed: PropTypes.number,
  text: PropTypes.string
};

export default Loading;
