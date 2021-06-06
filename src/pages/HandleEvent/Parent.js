
import React from 'react';
import { Button } from 'antd';
import ChildComp from './Child.js';


const data = [
    {id:1,category: "Sporting Goods", price: "$49.99", stocked: true, value: "Football",label: "Football"},
    {id:2,category: "Sporting Goods", price: "$9.99", stocked: true, value: "Baseball",label: "Baseball"},
    {id:3,category: "Sporting Goods", price: "$29.99", stocked: false, value: "Basketball",label:"Basketball"},
    {id:4,category: "Electronics", price: "$99.99", stocked: true, value: "iPod Touch",label:"iPod Touch"},
    {id:5,category: "Electronics", price: "$399.99", stocked: false, value: "iPhone 5",label:"iPhone 5"},
    {id:6,category: "Electronics", price: "$199.99", stocked: true, value: "Nexus 7",label:"Nexus 7"}
]


class ParentComp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            checkedList:[]
        }

    }
    
    handleClick = () => {
        this.child.show()
    }
    
    onRef = (ref) =>{
        this.child = ref
    }   
    
    handleChange = (checkedItem) =>{
        this.setState({ checkedList:checkedItem})
    }

    render(){
        return (
            <>
                <ChildComp listData={data}  onRef={this.onRef} onChildChange={this.handleChange}/>
                <Button type="primary" onClick={this.handleClick}>调用子组件show方法</Button>
                <p/>
                <div>
                    选中的项: 
                    <p>{ this.state.checkedList }</p>
                </div>
            </>
        )
    }
}

export default ParentComp