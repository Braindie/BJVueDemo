// 密码登录
export function fetchLoginByPwd() {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
        method: 'GET'
    })
}