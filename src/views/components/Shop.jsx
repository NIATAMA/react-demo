import React from 'react'
import PropTypes from 'prop-types'
import { List, Button, Avatar, message } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { getShopList } from '../../api/business/shop.js'

// scss
import scss from '../css/Shop.module.scss'

export default class Shop extends React.Component {

    static propTypes = {
        goodList: PropTypes.array.isRequired,
        cart: PropTypes.array.isRequired,
        addToCart: PropTypes.func.isRequired,
        addToGoodList: PropTypes.func.isRequired
    }

    state = {
        goodList: []
    }

    componentDidMount() {
        this.getGoodList()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state === nextState && this.props === nextProps) return false
        return true
    }

    /**
     * 获取商品列表
     */
    getGoodList = async () => {
        let res = null
        const { goodList } = this.props
        if (!goodList.length) {
            res = (await getShopList()).data
            this.props.addToGoodList(res)
        }
    }

    /**
     * 点击添加进购物车
     * @param {object} item 商品信息对象
     */
    addToCart = (item) => {
        this.props.addToCart(item)
        message.success('成功', 0.5)
    }

    render() {
        const renderItem = item => (
            <List.Item
                key={item.unid}
                actions={[<Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} onClick={() => this.addToCart(item)} />]}
            >
                <List.Item.Meta
                    avatar={<Avatar shape="square" size={100} src={item.goodImg} />}
                    title={<div>{item.goodName} <span style={{ color: 'red' }}>${item.goodPrice}</span></div>}
                    description={item.goodDesc}
                />
            </List.Item>
        )

        return (
            <div className={scss['shop']}>
                <List
                    itemLayout="horizontal"
                    size="default"
                    dataSource={this.props.goodList}
                    renderItem={renderItem}
                />
            </div>
        )
    }
}