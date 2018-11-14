import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import {retrieveAllData} from '../actions/index';
import Chart from './chart'; 


class Overview extends Component {

   componentWillMount(){
        this.props.retrieveAllData();
        
   }

   renderData(data){
      return(
        <tr key={data._id}>
        <td>{data.deviceID}</td>
        <td>{<Chart data={data.bpms} color="red"/>}</td>
        <td>{<Chart data={data.temps} color="blue"/>}</td>
        <td>{data.movements}</td>
        </tr>
      );  
   }
  

  checkingForData(){
    if(this.props.data){
      return(<tbody>
      {this.renderData()}
     </tbody>)
    }
  }
  render() {
    console.log(this.props.data);
    return (
      <div className="container">
      <table className="table table-hover">
      <thead>
      <tr>
          <th>Device-id</th>
          <th>Beats per Minutes</th>
          <th>Temprature</th>
          <th>Movements</th>
      </tr>
      </thead>
      <tbody>
      {this.props.data.map(data => this.renderData(data))}
      
      </tbody>
    </table>
      </div>
    )

   
  }
}
function mapStateToProps(state){
    return{
        'data': state.data
    }
}

export default connect(mapStateToProps, {retrieveAllData})(Overview); 
