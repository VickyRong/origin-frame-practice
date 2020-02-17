
 import _ from 'lodash';
 import './antd.min.css';

  function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'huyanrong!!!',], ' ');
    element.classList.add('hello');
    return element;
  }

  document.body.appendChild(component());