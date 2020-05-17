import * as types from './actionTypes.js'
import {
    purchase
} from '../api/business/cart.js'

export const type_1 = data => ({
    type: types.TYPE_1,
    data
})
// 将商品加入购物车
export const addToCart = data => ({
    type: types.ADDTOCART,
    data
})
// 将数据填充到商品列表
export const addToGoodList = data => ({
    type: types.ADDTOLIST,
    data
})
// 将商品从购物车移除
export const removeFromCart = data => ({
    type: types.REMOVEFROMCART,
    data
})
// 购物车结算 - 异步
export const cartPurchase = data => {
    return async (dispatch, getState) => {
        // 请求服务端
        const res = await purchase(data)
        if (res.success) return dispatch(removeFromCart(data))
    }
}