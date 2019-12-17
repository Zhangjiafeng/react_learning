import React,{Component} from "react";
import {Link} from "react-router-dom";
class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return(
            <div>
                <h3>这是Home</h3>
                <Link to={'/news'}>新闻</Link>
                <Link to={'/powerpoint'}>PPT</Link>
                <div style={{position:"relative"}}>
                    <div style={{width:220,height:100,position:"absolute",left:0,top:0,background:"skyblue"}}>左侧</div>
                    <div style={{height:100,marginLeft:220,marginRight:220,background:'#EEE'}}></div>
                    <div style={{width:220,height:100,position:"absolute",right:0,top:0,background:"orange"}}></div>
                </div>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    <div style={{flex:1,height:100,background:"lightpink",marginRight:20}}></div>
                    <div style={{flex:2,height:100,background:"lightcoral"}}></div>
                </div>
                <div style={{height:45,width:120,borderRadius:10,background:"orange",boxShadow:"1px 2px 5px 0 rgba(0,0,0,.5)",margin:"30px auto"}}></div>
            </div>
        )
    }
}
export default Home
