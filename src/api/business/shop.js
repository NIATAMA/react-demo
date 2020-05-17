import axios from '../'
import { respHandle } from '../../utils/responseHandler.js'

const prefix = '/shop'

const reqUrl = {
    page: prefix + '/page',
    detail: prefix + '/detail',
    update: prefix + '/update',
    delete: prefix + '/delete'
}

/**
 * 获取商品列表的分页数据 GET
 * @param {object} parameters 参数集，不可以嵌套对象或数组
 */
export async function getShopList(parameters) {
    const params = {
        ...parameters
    }
    const res = await axios({
        url: reqUrl.page,
        method: 'GET',
        params
    })
    return respHandle(res)
}