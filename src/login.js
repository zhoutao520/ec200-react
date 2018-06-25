import React, { Component } from 'react';
import './styles/login.css';
import axios from 'axios';
import { 
    Icon,
} from 'antd';

export default class Login extends Component{
    state = {
        user : '',
        password : '',
        msg : ''
    };

    login = () => {
        if (this.state.user === '') {
            this.setState({msg: '用户名不得为空！'});
            return false;
        }
        if (this.state.password === '') {
            this.setState({msg: '密码不得为空！'});
            return false;
        }
        this.setState({msg: ''});
        axios.post('http://192.168.0.11:8000/console/login/',{
            username:this.state.user,
            password:this.state.password
        }).then(res => {
            if(res.data.status){
                localStorage.setItem('userToken',res.data.token);
                localStorage.setItem('user',res.data.result.user);
                localStorage.setItem('is_admin',res.data.result.is_admin);
                localStorage.setItem('is_superuser',res.data.result.is_superuser);
                window.location.reload(); 
            }
        })
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    render(){
        return(
            <div className="main" style={{backgroundImage:`url('images/login.gif')`}}>
                <div className="box">
                    <h1>Login</h1>
                    <div className="login">
                        <label>
                            <Icon type="user" style={{marginRight:'.15rem',verticalAlign:'middle',fontSize:'.18rem',color:'#fff'}} />
                            <input name="user" type="text" onChange={this.handleInputChange}/>
                        </label>
                        <label>
                            <Icon type="lock" style={{marginRight:'.15rem',verticalAlign:'middle',fontSize:'.18rem',color:'#fff'}} />
                            <input name="password" type="password" onChange={this.handleInputChange}/>
                        </label>
                        { this.state.msg !== '' &&
                            <p className="msg">
                                <Icon type="close-circle-o" style={{fontSize:'.12rem',marginRight:'5px',color:'red'}}/>
                                <span>{this.state.msg}</span> 
                            </p>
                        }
                    </div>
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        );
    }
}