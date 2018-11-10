import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div>
      <div className="jumbotron">
        <div className="container">
          <h1 className="headertxt display-3">Welcome</h1>
          <b><p className="introtext">Welcome to a Machine too Machine communication product made for Streaming comapanies. 
          Through our product you are able to monitor your viewers while they watch one of your 
          pilot shows. We track their heart monitor and movement while their watching one of your shows
          and presenting the data. </p>
          </b>
          <p>
          </p>
        </div>
        </div>

       <div className="container">
          <div className="row featurette">
                <div className="col-md-7">
                    <h4 className="featurette-heading">Montoring BPM</h4>
                    <span className="text-muted">IoT + Movies = True </span>
                    <p className="lead">We are now using Heart and movement sensors to track your viewers while they are watching pilot shows. Using IoT, MQTT-Protocol and our 
                    very own backend cloud solution. We can now deliver you the information you need to know about your viewers. Through our very own website you can 
                    easily watch your viewers BPM live. We are also storing these types of information for you so that you can 
                    easily use this for other purposes like Big Data/Data Science</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto"
                    data-src="holder.js/500x500/auto" 
                    alt="500x500" 
                    src="http://s3.amazonaws.com/bw-4053e4891648aa5d0bd54fe6f4beb464-bwcore/Feb_18/heart_monitor.jpg" 
                    />
       
                </div>
           </div>
       </div>
       </div>  
      );
  }
}


export default Landing; 
