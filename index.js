var ReactDOM = require('react-dom');
var React = require('react');

var HelloWorld = React.createClass({
  render: function() {
    return (
      React.createElement('div', null, "Say something different")
    );
  }
 });

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('content')
);


