import React, { Component } from 'react';
import '../styles/home.css'

export default class Home extends Component{
    state = {
        floor:[
            {
                id:1,
                content:'1F'
            },
            {
                id:2,
                content:'2F'
            },
            {
                id:3,
                content:'3F'
            },
            {
                id:4,
                content:'4F'
            },
            {
                id:5,
                content:'5F'
            },
            {
                id:6,
                content:'6F'
            },
            {
                id:7,
                content:'7F'
            },
        ]
    }

    render(){
        return(
            <div className="home" style={{backgroundImage:`url('images/background3.jpg')`}}>
                <div className="machine" style={{left: '10%'}}>

                </div>
                <div className="machine" style={{left: '35%'}}>

                </div>
                <div className="machine" style={{left: '60%'}}>

                </div>
                <div className="floor">
                    <ul>
                        { this.state.floor.map( item => (
                            <li>{item.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="bottom">
                    <span>总供水温度：24 ℃</span>
                    <span>总回水温度：23.7 ℃</span>
                    <span>总供水压力：1.1 Mpa</span>
                    <span>总回水压力：0.3 Mpa</span>
                    <span>总流量：0 m³/h</span>
                </div>
            </div>
        );
    }
}