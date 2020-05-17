import React from 'react';
import { Menu } from 'antd'
import { ShoppingCartOutlined, ShopOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

import scss from '../css/MainFooter.module.scss'

function MainFooter(props) {
    const history = useHistory()
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['shop']} className={scss['footer-menu']}>
            <Menu.Item key="shop" onClick={() => history.push('/shop')} className={scss['menu-item']} icon={<ShopOutlined />}>
                shop
            </Menu.Item>
            <Menu.Item key="cart" onClick={() => history.push('/cart')} className={scss['menu-item']} icon={<ShoppingCartOutlined />}>
                cart
            </Menu.Item>
        </Menu>
    )
}

export default MainFooter
