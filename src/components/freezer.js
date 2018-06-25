import React, { Component } from 'react';
import { Card } from 'antd';
import '../styles/freezer.css'

export default class Freezer extends Component{
    state = {
        freezer:[
            {
                name:'1#离心冷水机组',
                status:true,
            },
            {
                name:'2#离心冷水机组',
                status:true,
            },
            {
                name:'3#螺杆冷水机组',
                status:true,
            },
        ],
        pump_left:[
            {
                name:'1#冷却循环泵',
                status:true,
            },
            {
                name:'2#冷却循环泵',
                status:true,
            },
            {
                name:'3#冷却循环泵',
                status:true,
            },
            {
                name:'4#冷却循环泵',
                status:true,
            },
        ],
        pump_right:[
            {
                name:'1#冷冻循环泵',
                status:true,
            },
            {
                name:'2#冷冻循环泵',
                status:true,
            },
            {
                name:'3#冷冻循环泵',
                status:true,
            },
            {
                name:'4#冷冻循环泵',
                status:true,
            },
        ],
        tower:[
            {
                name:'1#冷却塔',
                status:true,
            },
            {
                name:'2#冷却塔',
                status:true,
            },
            {
                name:'3#冷却塔',
                status:true,
            },
            {
                name:'4#冷却塔',
                status:true,
            },
            {
                name:'5#冷却塔',
                status:true,
            },
        ],
        condenser:[
            {
                name:'1#新风机组',
                status:true,
            },
            {
                name:'2#新风机组',
                status:true,
            },
            {
                name:'3#新风机组',
                status:true,
            },
            {
                name:'4#新风机组',
                status:true,
            },
            {
                name:'5#新风机组',
                status:true,
            },
            {
                name:'6#新风机组',
                status:true,
            }, 
        ],
    };

    render(){
        return(
            <div className="content">
                <div className="all-freezer">
                    <ul>
                        {this.state.freezer.map((item, index) => (
                            <li className="freezer" key={index}>
                                {index === 0 ? (
                                    <img src={item.status?'images/freezer_top.gif':'images/freezer_top.png'} alt="冷冻机" />
                                ) : (
                                    <img src={item.status?'images/freezer.gif':'images/freezer.png'} alt="冷冻机" />
                                )}
                            </li>
                        ))}
                    </ul>
                    <ul className="left">
                        {this.state.pump_left.map((item, index) => (
                            <li className="freezer" key={index}>
                                <img src={item.status?'images/pump_left.gif':'images/pump_left.png'} alt="冷却循环水泵" />
                            </li>
                        ))}
                        {this.state.tower.map((item, index) => (
                            <li className="freezer" key={index}>
                                {index === this.state.tower.length-1 ? (
                                    <img src={item.status?'images/tower_buttom.gif':'images/tower_buttom.png'} alt="冷却塔" />
                                ) : (
                                    <img src={item.status?'images/tower.gif':'images/tower.png'} alt="冷却塔" />
                                )}
                            </li>
                        ))}
                    </ul>
                    <ul className="right">
                        {this.state.pump_right.map((item, index) => (
                            <li className="freezer" key={index}>
                                <img src={item.status?'images/pump_right.gif':'images/pump_right.png'} alt="冷冻循环水泵" />
                            </li>
                        ))}
                        {this.state.condenser.map((item, index) => (
                            <li className="freezer" key={index}>
                                {index === this.state.condenser.length-1 ? (
                                    <img src={item.status?'images/condenser_buttom.gif':'images/condenser_buttom.png'} alt="新风机组" />
                                ) : (
                                    <img src={item.status?'images/condenser.gif':'images/condenser.png'} alt="新风机组" />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="freezer-content">
                    <Card title="冷水机组">
                        {this.state.freezer.map((item, index) => (
                            <Card.Grid style={{textAlign: 'center'}}>{item.name}</Card.Grid>
                        ))}
                    </Card>
                </div>
            </div>
        );
    }
}