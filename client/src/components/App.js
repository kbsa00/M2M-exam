import React, { Component } from 'react';
import Header from './Header';
import LiveFeed from './LiveFeed';
import Landing from './Landing'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
         <div>
          <Header/>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path ='/live' component={LiveFeed} />
            </Switch>
         </div>        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
