/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Images from './../components/Images';
import Spinner from './../components/Spinner';

export default class extends Component {

  constructor(props) {
    super(props);

    this.endpoint = 'https://raw.githubusercontent.com/rpowis/pusscat.lol/master';

    this.state = {
      data: null
    }
  }

  isBirthday() {
    var today = new Date();
    var birthday = new Date(today.getFullYear(), 0, 22);
    return birthday.setHours(0,0,0,0) === today.setHours(0,0,0,0);
  }

  isAnniversary() {
    var today = new Date();
    var anniversary = new Date(today.getFullYear(), 5, 23);
    return anniversary.setHours(0,0,0,0) === today.setHours(0,0,0,0);
  }

  componentDidMount() {
    let keyword = this.isBirthday() ? 'birthday' :
                  this.isAnniversary() ? 'anniversary' :
                                          'happy';
    let url = this.endpoint + '/data/' + keyword + '.json';

    this.fetchData(url);
  }

  fetchData(url) {
    (async () => {
      try {
        var response = await fetch(url);
        var data = await response.json();

        this.setData(data);
      } catch (e) {
        console.log("Error: ", e);
      }
    })();
  }

  setData(data) {
    this.setState({data});
  }

  render() {
    if (!this.state.data) {
      return <Spinner/>;
    }

    let images = Object.keys(this.state.data).map(item => {
      return this.state.data[item].rgi_image;
    });

    let message = this.isBirthday() ? <h2>HAPPY BIRTHDAY BABES!!!</h2> :
                  this.isAnniversary() ? <h2>HAPPY ANNIVERSARY MY LOVE!!!</h2> :
                  <h2>Noooooo it's you!!!</h2>

    return (
      <div>
        {message}
        <Images list={images}></Images>
      </div>
    );
  }

}
