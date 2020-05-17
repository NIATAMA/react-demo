import React from 'react'
import PropTypes from 'prop-types'
import { List, Button, Avatar, InputNumber, Switch, Space, Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import scss from '../css/Cart.module.scss'

export default class Cart extends React.Component {

    static propTypes = {
        cart: PropTypes.array.isRequired,
        addToCart: PropTypes.func.isRequired,
        removeFromCart: PropTypes.func.isRequired,
        cartPurchase: PropTypes.func.isRequired
    }

    state = {
        selectArr: [], // 记录购物车商品的选择情况
        modalVis: false,
        listLoading: false // 列表加载样式
    }

    componentDidMount() {
        this.setState({ selectArr: (new Array(this.props.cart.length)).fill(false) })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state === nextState && this.props === nextProps) return false
        return true
    }

    /**
     * 计算总价格
     * @returns {number} 总价
     */
    getTotalProice = () => {
        const { cart } = this.props
        const { selectArr } = this.state
        if (!(cart && selectArr)) return
        let total = 0
        for (const key in cart) {
            if (selectArr[key]) total += (cart[key].goodPrice * cart[key].number)
        }
        return total
    }
    /**
     * 设置商品是否选中
     */
    setCartItemSelect = (index, check) => {
        let newSelectArr = this.state.selectArr.slice()
        newSelectArr[index] = check
        this.setState({ selectArr: newSelectArr })
    }

    /**
     * 修改商品数量
     */
    addGoodNumber = (number, unid) => {
        this.props.addToCart({ unid, number })
        this.forceUpdate()
    }
    /**
     * 移除商品
     */
    removeGood = (unid) => {
        this.setState({ listLoading: true })
        this.props.removeFromCart([unid])
        // 重新计算选中的数组,模拟延迟
        setTimeout(() => {
            this.setState({ selectArr: (new Array(this.props.cart.length)).fill(false), listLoading: false })
        }, 1000);
    }
    /**
     * 关闭模态框
     */
    handleModalCancel = () => {
        this.setState({ modalVis: false })
    }
    /**
     * 显示模态框
     */
    showModal = () => {
        if (!this.state.selectArr.includes(true)) return
        this.setState({ modalVis: true })
    }
    /**
     * 结账
     */
    purchase = () => {
        const { cart } = this.props
        const { selectArr } = this.state
        const indexs = []
        selectArr.forEach((val, index) => {
            if (val) indexs.push(index)
        })
        const unids = indexs.map(val => cart[val].unid)
        // 结账
        this.props.cartPurchase(unids)
        // 关闭modal
        this.setState({ modalVis: false })
        this.removeGood()
    }

    render() {
        const footer = (
            <div style={{ textAlign: 'right' }}>
                <Space align="center" size="middle">
                    <div>
                        <span>TOTAL：</span>
                        <span style={{ fontSize: '25px', color: 'red' }}>{this.getTotalProice()}</span>
                        <span> DOLLAR</span>
                    </div>
                    <Button type="danger" onClick={this.showModal} ghost>Purchase</Button>
                </Space>
            </div>
        )

        const renderItem = (item, index) => (
            <List.Item
                key={item.unid}
                actions={[
                    <Space direction="vertical">
                        <Button type="danger" shape="circle" icon={<DeleteOutlined />} onClick={() => this.removeGood(item.unid)} />
                        <Switch onChange={check => this.setCartItemSelect(index, check)} />
                    </Space>]}
            >
                <List.Item.Meta
                    avatar={<Avatar shape="square" size={100} src={item.goodImg} />}
                    title={<span>{item.goodName}</span>}
                    description={
                        <div>
                            <p >单价：{item.goodPrice}</p>
                            <InputNumber min={1} defaultValue={item.number} onChange={val => this.addGoodNumber(val, item.unid)} />
                        </div>
                    }
                />
            </List.Item>
        )

        return (
            <div className={scss['cart']}>
                <List
                    itemLayout="horizontal"
                    size="default"
                    footer={footer}
                    dataSource={this.props.cart}
                    renderItem={renderItem}
                    loading={this.state.listLoading}
                />
                <Modal
                    title={null}
                    footer={null}
                    maskClosable={false}
                    visible={this.state.modalVis}
                    // onOk={this.handleOk}
                    // confirmLoading={true}
                    onCancel={this.handleModalCancel}
                >
                    <div style={{ padding: '0 20px' }}>
                        <Button type="primary" onClick={this.purchase} block>支付</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}