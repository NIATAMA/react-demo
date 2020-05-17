import axios from '../'
import {
    respHandle
} from '../../utils/responseHandler.js'

const prefix = '/cart'

const reqUrl = {
    purchase: prefix + '/purchase'
}

/**
 * 结算，POST
 * @param {object} parameters 参数集，不可以嵌套对象或数组
 */
export async function purchase(parameters) {
    const data = {
        ...parameters
    }
    const res = await axios({
        url: reqUrl.purchase,
        method: 'POST',
        data
    })
    return respHandle(res, true)
}