/**
 * 引入JSX语法
 */
import './style/index.css';
import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom'

import ReactDOM from 'react-dom';
import TreeDemo from './demo/tree-demo'
import ButtonDemo from './demo/button-demo'
import MockDemo from './demo/mock-demo'
import RequestDemo from './demo/request-demo'
import FormPage from './pages/form/index'

const NavList = 
<>
  <ul>
    <li><Link to="/tree">树结构</Link></li>
    <li><Link to="/button">按钮</Link></li>
    <li><Link to="/mock">数据模拟示例</Link></li>
    <li><Link to="/request">请求示例</Link></li>
    <li><Link to="/form">表单页面</Link></li>
  </ul>
</>;


ReactDOM.render(
  <Router>
        { NavList }
        <Switch>
          <Route path="/tree">
            <TreeDemo />
          </Route>
          <Route path="/button">
            <ButtonDemo />
          </Route>
          <Route path="/mock">
            <MockDemo />
          </Route>
          <Route path="/request">
            <RequestDemo />
          </Route>
          <Route path="/form">
            <FormPage />
          </Route>
        </Switch>
  </Router>,
  document.querySelector('#root'),
);

