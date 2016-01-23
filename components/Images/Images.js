var React = require('react');
var Packery = require('react-packery-component')(React);
import './Images.scss';

var packeryOptions = {
  transitionDuration: 0
};

var Images = React.createClass({
  render: function () {
    var childElements = this.props.list.map(function(element) {
     return (
       <img src={element} />
     );
   });

    return (
      <Packery
        className={'my-gallery-class'} // default ''
        options={packeryOptions} // default {}
        disableImagesLoaded={false} // default false
      >
        {childElements}
      </Packery>
    );
  }
});

module.exports = Images;
