import React, { Component } from 'react'
import {Line as LineChart} from 'react-chartjs-2';
import io from 'socket.io-client';

 class LiveMovement extends Component {
    constructor(props){
        super(props);
        this.state = {
          movementInfo: [], 
        }
    }
      componentDidMount(){
     
        if(process.env.NODE_ENV === 'development'){
          this.socket = io('localhost:5000');
        }else{
          this.socket = io('/');
        }
        this.socket.on('movement', data => {
          let obj = JSON.parse(data);
          console.log(obj);
          addingMovementInfo(obj);
        }); 
        
        const addingMovementInfo = obj => {
          this.setState({movementInfo:[...this.state.movementInfo, obj]});
        }
        console.log(this.state.movementInfo);
      }

      render() {
         
        let data = {
          labels: this.state.movementInfo.map((o) => o.y),
          datasets: [
            {
              label: "Live Movement graph",
              data: this.state.movementInfo.map((o) => o.x)
            }
          ]
        }
    
        return(
          <div className="container">
          <div>
              <h4>Live Movement</h4>
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


export default LiveMovement;