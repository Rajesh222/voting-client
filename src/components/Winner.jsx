import React, { Component, PropTypes } from 'react';

export default class Winner extends Component{
  render() {
    return <div className="winner">
      <h1>Winner is {this.props.winner}!</h1>
    </div>;
  }
};

  Winner.propTypes = {
    winner: PropTypes.string
  };