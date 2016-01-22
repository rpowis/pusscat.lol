import React, { Component } from 'react';
import './Spinner.scss';

export default class extends Component {

  render() {
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    );
  }

}
