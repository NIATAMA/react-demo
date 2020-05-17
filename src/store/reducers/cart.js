// 更新state
import {
    ADDTOCART,
    REMOVEFROMCART
} from '../actionTypes.js'

export const initState = {
    cart: [] // 表示购物车的商品
}

export const mutations = {
    [ADDTOCART]: function (state, data) {
        const newState = Object.assign({}, state)
        // 查重
        let tempNum = null
        const temp = newState.cart.filter((val, index) => {
            if (val.unid === data.unid) {
                tempNum = index
                return true
            }
            return false
        })
        if (temp.length) {
            if (data.number) {
                newState.cart[tempNum].number = data.number
            } else {
                newState.cart[tempNum].number++
            }
        } else {
            newState.cart.push({
                ...data,
                number: 1
            })
        }
        return newState
    },
    [REMOVEFROMCART]: function (state, data) {
        // data是unid[]
        const newState = Object.assign({}, state)
        const {
            cart
        } = newState
        newState.cart = cart.filter(val => !data.includes(val.unid))
        return newState
    }
}