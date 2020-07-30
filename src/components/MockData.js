import React from 'react';
import { Button } from 'antd';
import Mock from 'mockjs';

class MockDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mockData:[]
        }
    }
    getData = () =>{
        let data = Mock.mock({
            'list|1-10': [{
                'id|+1': 1
            }]
        })
        this.setState({ mockData:data.list })
    }
    clearData = () =>{
        this.setState({ mockData:[] })
    }

  render() {
      let { mockData } = this.state;
    return (
      <div>
        <h3>【 Mock数据 】</h3>
        <Button type="primary" className="g-mr-20" onClick={this.getData}>Mock数据</Button>
        <Button type="danger" onClick={this.clearData}>清除数据</Button>
        <div className="content g-mt-20">
                {
                    mockData.map(item=>
                        <p key={item.id}>id值为：{item.id}</p>
                    )
                }
        </div>
      </div>
    );
  }
}

export default MockDemo;