// 工具方法

/**
 * 生成完整的响应数据
 * @param {obejct} data 响应数据体
 * @param {string} message 消息
 */
export function builder(data, message = '') {
    return {
        data,
        message,
        paging: {
            pageIndex: 1,
            pageSize: 10,
            totalPage: 1,
            totalRecord: 8
        },
        schema: null,
        success: true,
        timestamp: Date.now()
    }
}