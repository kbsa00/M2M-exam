import React, { Component } from 'react';
import {Line as LineChart} from 'react-chartjs-2';
import io from 'socket.io-client';

class LiveTemp extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          tempinfo: [], 
        }
      }
    
      componentDidMount(){
       
        if(process.env.NODE_ENV === 'development'){
            this.socket = io('localhost:5000');
        }else{
            this.socket = io('m2m-exam.herokuapp.com/socket.io/?EIO=4&transport=websocket');
        }
     

        this.socket.on('temp', data => {
          addingTemp(data);
        }); 
        const addingTemp = data => {
          this.setState({tempinfo:[...this.state.tempinfo, data]});
        }
      }
        

      render() {
        let data = {
          labels: this.state.tempinfo.map((o) => o.time),
          datasets: [
            {
              label: 'Live Temprature Graph',
              data: this.state.tempinfo.map((o) => o.temp)
            }
          ]
        }
    
        return(
          <div className="container">
          <div>
              <h4>Live Temprature</h4>
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


export default LiveTemp;