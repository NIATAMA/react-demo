// 常量
import {
    ADDTOLIST
} from '../actionTypes.js'

// 初始化state
export const initState = {
    goodList: []
}

export const mutations = {
    [ADDTOLIST]: function (state, data) {
        const newState = Object.assign({}, state)
        newState.goodList = data
        return newState
    }
}