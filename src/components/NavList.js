
import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Divider } from 'antd'

class NavList extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/tree">树结构</Link></li>
        <li><Link to="/button">按钮</Link></li>
        <li><Link to="/mock">数据模拟示例</Link></li>
        <li><Link to="/request">请求示例</Link></li>
        <li><Link to="/form">表单页面</Link></li>
        <li><Link to="/event">父子组件通信（父组件调用子组件方法Ref，子组件通知父组件）</Link></li>
      </ul>
    );
  }
}

export default NavList;