import React, {Component} from 'react';
import {Button, Input} from "antd";
import {Redirect} from "react-router-dom"
import {isLogin} from "../assets/publicData";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:0
        }
    }

    changeStatus(){
        localStorage.setItem("isLogin","1");
        this.setState({
            isLogin:1
        })
    }
    render() {
        return (
            <div style={{margin:"150px auto",width:"20%"}}>
                {
                    !this.state.isLogin?<div><Input placeholder="please input username" style={{marginTop: 30}} addonBefore="用户名"/>
                    < Input placeholder="please input password" type="password" style={{marginTop:30,marginBottom:30}} addonBefore="密  码"/>
                    <Button type="primary" onClick={this.changeStatus.bind(this)}>登录</Button></div>:<Redirect to={{pathname:"/"}}/>
                }
            </div>
        )
    }
}
export default Login
