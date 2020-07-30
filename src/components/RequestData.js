import React from 'react';
import { Button } from 'antd';
import request from '../util/request';

class RequestDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataInfo:{}
        }
    }
    getData = () =>{
        request('getUserInfo',{})
        .then(res=>{
            console.log('res:',res)
            if(res){
                this.setState({ dataInfo:res })
            }
        }).catch(err=>{
            console.log('err:',err)
        })
    }
    clearData = () =>{
        this.setState({ dataInfo:{} })
    }

  render() {
      let { dataInfo } = this.state;
    return (
      <div>
        <h3>【 Request请求数据 】</h3>
        <Button type="primary" className="g-mr-20" onClick={this.getData}>请求用户数据</Button>
        <Button type="danger" onClick={this.clearData}>清除数据</Button>
        {
            dataInfo ?
            <div className="g-mt-20">
                <h4>用户信息：</h4>
                <p>姓名：{ dataInfo.name }</p>
                <p>邮箱：{ dataInfo.email }</p>
                <p>性别：{ dataInfo.sex }</p>
                <p>国籍: { dataInfo.nation }</p>
            </div>:null
        }
      </div>
    );
  }
}

export default RequestDemo;