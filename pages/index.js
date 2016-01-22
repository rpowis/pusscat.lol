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

    this.cx = '014343924111201567214:mctjyj4egne';
    this.apiKey = 'AIzaSyDp08xnKZo4xuPgajY4ZHPi--_hbmx1_Rk';
    this.endpoint = 'https://www.googleapis.com/customsearch/v1';

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const api = this.endpoint + '?key=' + this.apiKey + '&cx=' + this.cx;
    let query = encodeURIComponent('birthday cat'.replace(/ /g, '+'));
    let url =  api + '&imgSize=large&q=' + query;

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

    let data = this.state.data;
    let images = Object.keys(data.items).map(item => {
      let i = data.items[item];
      if (i.pagemap) {
        return i.pagemap.cse_image[0].src;
      }
    });

    return <Images list={images}></Images>;
  }

}
