import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div className="images">
        {this.props.list.map((image, i) => {
          return (
            <figure key={i}>
              <img src={image} />
            </figure>
          )
        })}
      </div>
    );
  }

}
