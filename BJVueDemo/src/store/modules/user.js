import { fetchLoginByPwd } from '@/api/login';

const user = {
    actions: {
        // 用户名登录
        LoginByPassword({ commit }) {
            return new Promise((resolve, reject) => {

                fetchLoginByPwd()
                .then(data => {
                    resolve(data);
                  })
                  .catch(error => {
                    reject(error);
                  });
            });
        }
    }    
}

export default user;
