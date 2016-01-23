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

  componentDidMount() {
    let keyword = this.isBirthday() ? 'birthday' : 'happy';
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
      let field = this.state.data[item].rgl_link;
      let regex = /imgurl=(\S+)&imgrefurl/;
      let img = field.match(regex);
      if (img) {
        return img[1];
      }
    });

    let message = isBirthday()
      ? <h2>HAPPY BIRTHDAY BABES!!!</h2>
      : <h2>Noooooo it's you!!!</h2>;

    return (
      <div>
        {message}
        <Images list={images}></Images>
      </div>
    );
  }

}
