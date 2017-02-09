import React, { Component, PropTypes } from 'react';

export default class Winner extends Component{
  render() {
    return <div className="winner">
      Winner is {this.props.winner}!
    </div>;
  }
};

  Winner.propTypes = {
    winner: PropTypes.string
  };