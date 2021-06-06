import React from 'react';
import { Modal ,Checkbox} from 'antd'




class ChildComp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isShow : false,
            checked : false,
            checkedList:[]
        }
    }

    componentDidMount(){
       this.props.onRef(this);
    }

    show = () =>{
        this.setState({ isShow:true })
    }

    hide = () =>{
        this.setState({ isShow:false })
    }
    

    handleOk = () => {
        this.props.onChildChange && this.props.onChildChange(this.state.checkedList)
        this.setState({ isShow:false })
    }

    handleCancel = () => {
        this.setState({ isShow:false })
    }    

    handleChange = (checkedValues) =>{
        this.setState({checkedList:checkedValues})
    }

    render(){
        let { isShow } = this.state;
        let { listData } = this.props
        return (
            <>
               
                 <Modal  
                    title="内容弹窗" 
                    visible={ isShow }
                    onOk={ this.handleOk }
                    onCancel={ this.handleCancel }
                >
                        
                    <Checkbox.Group  onChange={this.handleChange} options={listData} />

                </Modal>
            </>
        )
    }


}

export default ChildComp;
