import React, { Component } from 'react';
import Header from './Header';
import LiveGraph from './LiveGraph';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <LiveGraph />
      </div>
    );
  }
}

export default App;
