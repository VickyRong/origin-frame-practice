/**
 * 引入JSX语法
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import routeConfig from './router/route'

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
class App extends React.Component{
  render(){
    return (
        <Router>
           { NavList }
            <Switch>
              {
                routeConfig.map((route,i)=>(
                  <Route
                    key={i}
                    path={route.path}
                    render={props=>(
                      <route.component {...props} routers={route.routes} />
                    )}
                  >
                  </Route>
                ))
              }
            </Switch>
      </Router>
    )
  }
}
export default App;
