/**
 * 引入JSX语法
 */
import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import routeConfig from './router/route';
import './style/index.css';
import NavList from './components/NavList';
import { Divider } from 'antd'

class App extends React.Component{
  render(){
    return (
      <div className="container">
          <Router>
            <NavList/>
            <Divider>展示区</Divider> 
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
      </div>
    )
  }
}
export default App;
