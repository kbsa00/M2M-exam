import React, { Component } from 'react'
import {Line as LineChart} from 'react-chartjs-2';
import io  from 'socket.io-client';

class LiveGraph extends Component {

  constructor(props){
    super(props);
    this.state = {
      today: '', 
      bpminfo: [], 
      time: []
    }


    this.socket = io('localhost:5000');
    this.socket.on('bpm', data => {
      addingBpm(data);
      
      console.log(data);
    })

    const addingBpm = data => {
      this.setState({bpminfo:[...this.state.bpminfo, data.bpm]});
      this.setState({time:[...this.state.time, data.time]});  
    }
  }

  componentDidMount(){
    this.setState({
      today: this.gettingDate()
    })
  }

  gettingDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
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
      labels: this.state.time,
      datasets: [
        {
          label: `Live Heart Beat Monitor - ${this.state.today}`,
          data: this.state.bpminfo
        }
      ]
    }
    return(
      <div className="container">
      <div>
          <h4 className="center">Live Heatbeat</h4>
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

export default LiveGraph