// 响应数据格式
const resp = {
    data: [{ index: 1 }, { index: 2 }],
    message: '',
    paging: {
        pageIndex: 1,
        pageSize: 10,
        totalPage: 1,
        totalRecord: 8
    },
    schema: null,
    success: true,
    timestamp: 1589553637881
}
// 请求数据格式
const requestPayload = {
    pageIndex: 1,
    pageSize: 10,
    request: {
        xxx: 'xxx'
    }
}
// 商品数据体格式
const good = {
    unid: 'xxxx',
    goodName: '商品名',
    goodDesc: '商品描述',
    goodImg: '商品图片链接',
    goodPrice: '商品价格'
}