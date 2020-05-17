import Axios from 'axios'
import React from 'react'
import { message } from 'antd'

// 创建axios实例
const service = Axios.create({
    baseUrl: process.env.BASE_URL,
    timeout: 6000
})

const err = (error) => {
    const respBody = error.response
    if (respBody) {
        const rnode = (<span>请求异常，code: {respBody.status}，url: {respBody.config.url}</span>)
        message.error(rnode, 3)
    }
}

service.interceptors.response.use(resp => resp.data, err)

export default service