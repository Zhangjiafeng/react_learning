import React, {Component} from 'react';
import {Button, Input,Icon} from "antd";
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
        document.location.href="/";
    }
    render() {
        return (
            <div className="loginBox">
                <div className="loginPhoto"></div>
                <Input className="loginUser" placeholder="username"
                       prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
                <Input className="loginPass" placeholder="password"
                       type="password"
                        prefix={<Icon type="taobao" style={{ color: 'rgba(0,0,0,.25)' } }/>}
                />
                <Button className="loginBtn" type="primary"
                        onClick={this.changeStatus.bind(this)}>登录
                </Button>
            </div>
        )
    }
}
export default Login
