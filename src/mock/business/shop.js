import Mock, { Random } from 'mockjs'
import { builder } from '../utils.js'

const page = options => {
    console.warn(options)
    const res = []
    for (let index = 0; index < 5; index++) {
        res.push({
            unid: Random.guid(),
            goodName: Random.word(3, 5),
            goodDesc: Random.sentence(5, 10),
            goodImg: Random.dataImage('100x100', Random.word(2, 4)),
            goodPrice: Random.integer(5, 350)
        })
    }
    return builder(res)
}

// 购物车
Mock.mock(/\/shop\/page/, 'get', page)