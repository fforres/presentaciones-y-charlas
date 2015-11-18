  var ExampleApplication = React.createClass({
    render: function() {
      var message = 'I KNOW';
      return React.DOM.p(null, message);
    }
  });

    ReactDOM.render(
      React.createFactory(ExampleApplication)(),
      document.getElementById('container')
    );
