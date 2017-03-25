var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getDefaultState: function() {
    return {
      city: 'Sunnyvale'
    };
  },
  getInitialState: function() {
    return {
      city: this.props.city
    };
  },
  handleNewCity: function(city) {
    this.setState(city);
  },
  render: function() {
    var city = this.state.city;
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onNewCity={this.handleNewCity}/>
        <WeatherMessage city={city}/>
      </div>
    );
  }
});

module.exports = Weather;
