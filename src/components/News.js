import React,{Component} from 'react';
import {Link} from "react-router-dom";
class News extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {aid:'1',title:'新闻111'},
                {aid:'2',title:'新闻222'},
                {aid:'3',title:'新闻333'}
            ]
        }
    }
    render() {
        return(
            <ul>
                {
                    this.state.list.map((value, index) => {
                        return<li key={index}>
                            <Link to={`/content/${value.aid}`}>{value.title}</Link>
                        </li>
                    })
                }
            </ul>
        )
    }
}
export default News;
