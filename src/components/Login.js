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
        document.location.href="/"
    }
    render() {
        return (
            <div style={{width:"20%",margin:"auto",paddingTop:150}}>
                <div style={{width:80,height:80,margin:"0 auto",background:"skyblue",borderRadius:"50%"}}>
                </div>
                <Input placeholder="username"
                       style={{marginTop: 30,height:45}}
                       prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
                <Input placeholder="password"
                       type="password"
                       style={{marginTop:30,marginBottom:30,height:45}}
                        prefix={<Icon type="taobao" style={{ color: 'rgba(0,0,0,.25)' } }/>}
                />
                <Button type="primary"
                        style={{width:"80%",marginLeft:"10%",height:40}}
                        onClick={this.changeStatus.bind(this)}>登录
                </Button>
            </div>
        )
    }
}
export default Login
