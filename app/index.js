const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a minimal 'Hello, world' application</p>
        <hr className="my-4"/>
        <p>Please develop me further!</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Boom!</a>
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
