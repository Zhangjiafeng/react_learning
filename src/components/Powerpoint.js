import React,{Component} from 'react';
import '../assets/css/pcontent.css'
class Powerpoint extends Component{

    constructor(props){
        super(props);
        this.state={
            current:0,
            total:5
        }
    }
    componentDidMount() {
        let that=this;
        window.addEventListener("keypress",function(e){
            switch(e.code.toString()){
                case "KeyW":
                    if(that.state.current===0)
                        break;
                    else{
                        let pages=document.getElementsByClassName("page");
                        pages[that.state.current-1].style.display="block";
                        pages[that.state.current].style.display="none";
                        that.setState({
                            current:that.state.current-1
                        })
                    }
                    break;
                case "KeyS":
                    if(that.state.current===that.state.total-1)
                        break;
                    else{
                        let pages=document.getElementsByClassName("page");
                        pages[that.state.current+1].style.display="block";
                        pages[that.state.current].style.display="none";
                        that.setState({
                            current:that.state.current+1
                        })
                    }
                    break;
                default:break;
            }
        })
    }

    render() {
        return(
            <div className="pptDiv" style={{scrollbar:'none'}}>
                <div className="page" style={{height:'100vh',width:'100%',background:"orange"}}>
                    1
                </div>
                <div className="page" style={{height:'100vh',width:'100%',background:"pink",display:"block"}}>
                    2
                </div>
                <div className="page" style={{height:'100vh',width:'100%',background:"skyblue",display:"none"}}>
                    3
                </div>
                <div className="page" style={{height:'100vh',width:'100%',background:"greenyellow",display:"none"}}>
                    4
                </div>
                <div className="page" style={{height:'100vh',width:'100%',background:"black",display:"none"}}>
                    5
                </div>
            </div>

        )
    }
}
export default Powerpoint;
