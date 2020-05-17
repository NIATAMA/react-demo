// import * as cart from './cart.js'
import * as shop from './shop.js'
import * as cart from './cart.js'

const initState = {
    ...(shop.initState),
    ...(cart.initState)
}

const mutations = {
    ...(shop.mutations),
    ...(cart.mutations)
}

export default function store(state = initState, action) {
    const res = mutations[action.type] && mutations[action.type](state, action.data)
    return res || state
}