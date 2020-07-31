import React from 'react';

class FormPage extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            selectValue:''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('提交表单：',e)
    }

    handleChange = (name,e) =>{
        this.setState({ 
            [name]:e.target.value
        })
    }


    render(){
        let { inputValue,selectValue } = this.state;
        return <>
            <h3>【 表单组件 】</h3>
            <form onSubmit={this.handleSubmit}>
                {/**input */}
                <label>
                    名字 : <input type="text" name="name" value={inputValue} onChange={(e)=>this.handleChange('inputValue',e)} />
                </label>
                {/**下拉选择 */}
                <select value={selectValue} onChange={(e)=>this.handleChange('selectValue',e)}>
                    <option value="grape">普通🍇</option>
                    <option value="coconut">椰子🥥</option>
                    <option value="mango">芒果🥭</option>
                    <option value="grapefruit">葡萄柚</option>      
                </select>
                <input type="submit" value="提交" />

            </form>
        </>
    }
}

export default FormPage;