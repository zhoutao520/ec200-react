import React, { Component } from 'react';
import RoutView from './router';
import { Link } from 'react-router-dom';
import './styles/App.css';
import { 
  Menu,
  Icon,
  Dropdown
} from 'antd';
const SubMenu = Menu.SubMenu;

export default class App extends Component {
  state = {
    collapsed: false,
    status:'1',
    date: this.dateFtt("yyyy-MM-dd hh:mm:ss",new Date())
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  dateFtt (fmt,date) {
    let o = {   
        "M+" : date.getMonth()+1,                 //月份   
        "d+" : date.getDate(),                    //日   
        "h+" : date.getHours(),                   //小时   
        "m+" : date.getMinutes(),                 //分   
        "s+" : date.getSeconds(),                 //秒   
        "q+" : Math.floor((date.getMonth()+3)/3), //季度   
        "S"  : date.getMilliseconds()             //毫秒   
    };   
    if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
    for(let k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
    return fmt;
  }
  checkUrlString (name) {
    let url = window.location.href;
    let reg = new RegExp(""+ name +"");
    let r = reg.test(url);
    return r;
  }
  tick() {
    this.setState({
      date: this.dateFtt("yyyy-MM-dd hh:mm:ss",new Date())
    });
  }
  componentWillMount() {
    if(this.checkUrlString('freezer')) this.setState({status:'2'})
    if(this.checkUrlString('freshAir')) this.setState({status:'3'})
    if(this.checkUrlString('fanCoil')) this.setState({status:'4'})
    if(this.checkUrlString('facilities')) this.setState({status:'5'})
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  exit = () => {
    localStorage.removeItem('userToken');
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.collapsed ? 'aside-s' : 'aside-b'}>
          <div className="logo">
            <img src='/images/EPCLogo6.png' alt="LOGO"/>
          </div>
          <Menu
            defaultSelectedKeys={[this.state.status]}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
            style={{backgroundColor: '#424d58',color:'#fff'}}
            inlineCollapsed={this.state.collapsed}>
            <Menu.Item key="0" className="userhead" disabled style={{padding:'0 2%'}}>
              <img src="images/user.jpg" alt=""/>
              { !this.state.collapsed &&
              <p>
                <span>当前用户：无妄勿求</span><br/>
                <span>时间：{this.state.date}</span>
              </p>
              }
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="home" />
              <Link to="/">首页</Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="api" /><span>能源运营</span></span>}>
              <Menu.Item key="2"><Link to="/freezer">制冷系统</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/freshAir">新风机组</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/fanCoil">风机盘管</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <Icon type="calendar" />
              <Link to="/facilities">设备台账</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className={this.state.collapsed ? 'main-s' : 'main-b'}>
          <div className="header">
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style={{margin:'0 .2rem'}} className="collapse" onClick={this.toggleCollapsed}/>
            <span>伊塔全生命周期科技设施与能源管理系统</span>
            <Dropdown overlay={(
              <Menu>
                <Menu.Item>
                  <Link to="/personal">个人中心</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/editPsd">修改密码</Link>
                </Menu.Item>
                <Menu.Item>
                  <span onClick={this.exit}>退出登录</span>
                </Menu.Item>
              </Menu>
            )}>
            <a className="ant-dropdown-link">
              <span className="user">无妄勿求</span>
              <img src="images/user.jpg" alt=""/>
            </a>
            </Dropdown>
          </div>
          <RoutView />
        </div>
      </div>
    );
  }
}