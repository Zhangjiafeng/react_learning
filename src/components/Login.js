import React, {Component} from 'react';
import {Button, Input,Icon} from "antd";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:0,
            username:'',
            password:'',
            open:false,
        }
    }

    componentDidMount() {
        let that=this;
        window.addEventListener("keydown",function(e){
            if(e.code==="Enter"){
                that.changeStatus()
            }
        })

    }

    changeUsername=(e)=>{
        this.setState({
            username:e.target.value,
        });
    }

    changePassword=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }

    handleClose=()=>{
        this.setState({
            open:false,
        })
    }

    changeStatus(){
        let {username,password}=this.state;
        if(username==="zhangsan"&&password==="123456"){
            localStorage.setItem("isLogin","1");
            this.setState({
                isLogin:1
            });
            document.location.href="/";
        }else{
            this.setState({
                open:true
            })
        }
    }
    render() {
        let {open} = this.state;
        return (
            <div className="loginBox">
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            关闭
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className="loginPhoto"/>
                <Input className="loginUser" placeholder="username" value={this.state.username}
                       onChange={this.changeUsername}
                       prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
                <Input className="loginPass" placeholder="password"
                       type="password" value={this.state.password}
                       onChange={this.changePassword}
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
