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
import './style/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import TreeDemo from './demo/tree-demo'
import ButtonDemo from './demo/button-demo'
import MockDemo from './demo/mock-demo'

ReactDOM.render(
  <div className="container">
    <div className="g-mb-20">
      <ButtonDemo/>
    </div>
    <div className="g-mb-20">
      <TreeDemo/>
    </div>
    <div className="g-mb-20">
      <MockDemo/>
    </div>
  </div>,
  document.querySelector('#root'),
);

