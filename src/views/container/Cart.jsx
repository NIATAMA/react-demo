import Cart from '../components/Cart.jsx'

// reac-redux
import { connect } from 'react-redux'
// action 函数
import { addToCart, removeFromCart, cartPurchase } from '../../store/actions.js'

export default connect(
    state => ({ cart: state.cart }),
    { addToCart, removeFromCart, cartPurchase }
)(Cart)