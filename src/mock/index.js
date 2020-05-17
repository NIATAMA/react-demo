if (process.env.NODE_ENV === 'development') {
    // 使用同步加载依赖防止请求早于mock运行导致无法拦截
    const Mock = require('mockjs')
    require('./business/shop.js')
    require('./business/cart.js')
    // 延时
    Mock.setup({
        timeout: 800
    })
    console.log('[mockjs] mock mounted')
}