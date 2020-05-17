import React from 'react';
import scss from './App.module.scss';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
// 组件
import Cart from './views/container/Cart.jsx'
import Shop from './views/container/Shop.jsx'
import MainFooter from './views/container/MainFooter.jsx'

const { Content, Header, Footer } = Layout

function App(props) {
  return (
    <div className={scss.app}>
      <Redirect to="/shop" />
      <Header className={scss['header']}>
        {props.location.pathname.substr(1)}
      </Header>
      <Content className={scss['content']}>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Content>
      <Footer className={scss['footer']}>
        <MainFooter />
      </Footer>
    </div>
  )
}

export default withRouter(App);
