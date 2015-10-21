import React from 'react';
import ReactDOM from 'react-dom/server';

class MyComponent extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

console.log(
  ReactDom.renderToString(
    <MyComponent />
  )
);
