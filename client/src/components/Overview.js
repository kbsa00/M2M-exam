import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import {retrieveAllData} from '../actions/index';
import _ from 'lodash';
import Chart from './chart'; 


class Overview extends Component {

   componentWillMount(){
        this.props.retrieveAllData();
        
   }

   renderData(data){
    
      return(
        <tr key={data._id}>
        <td>{data.deviceID}</td>
        <td>{<Chart data={[1,2,4,6.7]} color="orange"/>}</td>
        <td>{data.temp}</td>
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
          <th>Beats per Minute</th>
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
