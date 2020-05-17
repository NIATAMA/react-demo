import { message } from 'antd'
/**
 * 处理原始的响应数据，返回处理后的数据
 *  请求正常时
 *    当flag=true时，显示操作提示
 *    当flag=false时，不显示操作提示
 *  当请求异常时
 *    捕捉错误，打印出来，并返回数据体，异常提示由axios的拦截器去做
 *  当success=false时
 *    提示message
 * @param {{data: [], message: string, paging: object, success: boolean, timestamp: number}} res 响应数据
 * @param {Boolean} flag 是否显示提示的标志
 * @returns {object} 返回有效的数据体
 */
export function respHandle(res, flag = false) {
    if (!res) return { data: [] }
    if (res.success) {
        if (flag) message.success(res.message || '操作成功')
    } else {
        message.error(res.message || '操作失败')
    }
    return res
}