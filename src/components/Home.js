import React,{Component} from "react";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Zhangsan',
            age:30,

        }
    }
    render() {
        return(
            <div>
                你好react
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
            </div>
        )
    }
}
export default Home
