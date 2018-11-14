import React, { Component } from 'react';
import Header from './Header';
import LiveFeed from './LiveFeed';
import Landing from './Landing'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Overview from './Overview'; 
import {retrieveAllData} from '../actions/index';
import {connect} from 'react-redux';


class App extends Component {
  componentDidMount(){
    this.props.retrieveAllData();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
         <div>
          <Header/>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path ='/live' component={LiveFeed}/>
                <Route path ='/overview' component={Overview}/>
            </Switch>
         </div>        
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {retrieveAllData})(App);

