import React from 'react';
import ReactDOM from 'react-dom/server';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

console.log(
  React.renderToString(
    <MyComponent text="Hello World"/>
  )
);
