import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  doacall(){
    axios.get('/api/test')
    .then(res=> {
      console.log(res.data);
    })
    .catch(err => {
      console.log('error')
    });
  }
  render() {

    this.doacall();
    return (
      <div className="App">
        HELLO
      </div>
    );
  }
}

export default App;
