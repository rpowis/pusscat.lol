/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Spinner from './../components/Spinner';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  render() {
    if (!this.state.data) {
      return <Spinner/>;
    }
  }

}
