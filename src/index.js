/**
 * 基础引入
 */
//  import _ from 'lodash';

//   function component() {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'huyanrong!!!',], ' ');
//     element.classList.add('hello');
//     return element;
//   }

//   document.body.appendChild(component());


/**
 * 引入JSX语法
 */
import './antd.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import AntdDemo from './antd-demo'

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    
    <AntdDemo></AntdDemo>
  </div>,
  document.querySelector('#root'),
);

