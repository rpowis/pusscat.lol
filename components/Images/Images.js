import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div className="images">
        {this.props.list.map(image => {
          return (
            <figure>
              <img src={image} />
            </figure>
          )
        })}
      </div>
    );
  }

}
