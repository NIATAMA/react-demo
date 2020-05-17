import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// api与mock
import './mock'

// 引入antd全局样式
import 'antd/dist/antd.min.css'
// 国际化
import { ConfigProvider } from 'antd'
import zhcn from 'antd/es/locale/zh_CN'
// 路由
import { HashRouter } from 'react-router-dom'
// redux
import { store } from './store/index'
import { Provider } from 'react-redux'
// 全局配置
import './config'

ReactDOM.render(
  <Provider store={store} >
    <HashRouter>
      <ConfigProvider locale={zhcn} >
        <App />
      </ConfigProvider>
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);
