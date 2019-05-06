import fetch from '@/utils/fetch';

// // 密码登录
// export function fetchLoginByPwd() {
//     return fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
//         method: 'GET'
//     })
// }

// export function fetchLoginByPwd() {
//     return fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
//         method: 'get'
//     })
// }

// 密码登录
export function fetchLoginByPwd() {
    return fetch({
      url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
      method: 'get'
    });
  }