// 封装get请求
export function httpGet(url) {
    let result = fetch(url)
    return result
}
// 封装post请求
export function httpPost(url, data) {
    let result = fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json,text/plain,*/*',/* 格式限制：json、文本、其他格式 */
            'Content-Type': 'application/x-www-form-urlencoded'/* 请求内容类型 */
        },
        //data表单数据，body最终要的格式为username=tony&pwd=123456，所以需要格式化
        body: JSON.stringify(data)
    })
    return result
}
