// 包装类
import { connect } from 'react-redux'
// actions函数
import { addToCart, addToGoodList } from '../../store/actions.js'
// UI组件
import Shop from '../components/Shop.jsx'


export default connect(
    state => ({ goodList: state.goodList, cart: state.cart }),
    { addToCart, addToGoodList }
)(Shop)