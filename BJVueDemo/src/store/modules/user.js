import { fetchLoginByPwd } from '@/api/login';

const user = {
    actions: {
        // 用户名登录
        LoginByPassword({ commit }) {
            return new Promise((resolve, reject) => {

                // fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
                //     method: 'GET'
                // }).then((value) => {
                //     console.log(value);
    
                //     return value.text()
                    
                // }).then((res) => {
                //     console.log(res);
                //     // console.log(typeof(res))
                //     // console.log(JSON.parse(res))
                // })

                fetchLoginByPwd()
                .then((value) => {
                    console.log(value);
    
                    return value.text()
                    
                }).then((res) => {
                    console.log(res);
                    resolve(res);
                    // console.log(typeof(res))
                    // console.log(JSON.parse(res))
                })
            });
        }
    }    
}

export default user;
