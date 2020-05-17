import Mock from 'mockjs'
import {
    builder
} from '../utils.js'

const purchase = options => {
    console.warn(options)
    return builder(null, '结算成功，感谢宁的采购')
}

// 购物车
Mock.mock(/\/cart\/purchase/, 'post', purchase)