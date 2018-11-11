import React, { Component } from 'react'
import {Line as LineChart} from 'react-chartjs-2';
import io from 'socket.io-client';

class LiveBPM extends Component {

  constructor(props){
    super(props);
    this.state = {
      today: '', 
      bpminfo: [], 
    }
  }

  componentDidMount(){
    this.setState({
      today: this.gettingDate()
    });

    if(process.env.NODE_ENV === 'development'){
      this.socket = io('localhost:5000');
    }else{
      this.socket = io('https://m2m-exam.herokuapp.com:80/socket.io/?EIO=4&transport=websocket');
    }
   
    this.socket.on('bpm', data => {
      addingBPM(data);
    }); 
    const addingBPM = data => {
      this.setState({bpminfo:[...this.state.bpminfo, data]});
    }
  }
  
  gettingDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) {
      dd = '0'+dd
    } 
    if(mm<10) {
      mm = '0'+mm
    } 
    today = mm + '/' + dd + '/' + yyyy;
    return today;  
  }

  render() {
    let data = {
      labels: this.state.bpminfo.map((o) => o.time),
      datasets: [
        {
          label: `Live Heart Beat Monitor - ${this.state.today}`,
          data: this.state.bpminfo.map((o) => o.bpm)
        }
      ]
    }

    return(
      <div className="container">
      <div>
          <h4>Live Heartbeat</h4>
        <LineChart 
          data={data}
          width={600}
          height={250}
          />
          </div>
      </div>
    )
  }
}

export default LiveBPM;