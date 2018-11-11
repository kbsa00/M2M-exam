import React, { Component } from 'react';
import LiveBPM from './LiveBPM';
import LiveTemp from './LiveTemp';
import LiveMovement from './LiveMovement';

export default class LiveFeed extends Component {
  render() {
    return (
      <div>
        <LiveBPM />
        <LiveTemp />
        <LiveMovement/>
      </div>
    )
  }
}
