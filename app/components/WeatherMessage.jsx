var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var city = this.props.city;
    return (
      <div>
        <h3>The weather in {city}</h3>
        <p>Very weathery</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
