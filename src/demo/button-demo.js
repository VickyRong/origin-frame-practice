
import React from 'react';
import { Button } from 'antd';

class ButtonDemo extends React.Component {
  render() {
    return (
      <div>
        <h3>【 按钮 】</h3>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button> 
      </div>
    );
  }
}

export default ButtonDemo;