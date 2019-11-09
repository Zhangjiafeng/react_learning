import React,{Component} from 'react';
import './assets/css/App.css';
import './components/Home.js'
import Home from "./components/Home";
import News from "./components/News";
import Login from "./components/Login"
import {BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";
import {isLogin} from "./assets/publicData";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:localStorage.getItem("isLogin")
        }
    }
    render() {
        let login=localStorage.getItem("isLogin")
        return (
            <Router>
                <div>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/news" component={News}/>
                    <Route path="/core" component={Core}/>
                    <Route path="/content/:aid" component={Content}/>
                    {

                        login?null:<div>
                            <Redirect to={{pathname:'/login'}}/>

                        </div>
                    }
                </div>
            </Router>
        );
    }


}
class Content extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount() {
        const {aid}=this.props.match.params;
        console.log(aid)
    }

    render() {
        return(
            <div>
                我是新闻详情
            </div>
        )
    }
}
class Core extends Component{
    render() {
        return(
            <div>Core</div>
        )
    }
}

export default App;
