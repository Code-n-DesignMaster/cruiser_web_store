import Vue from 'vue'

export class Auth {

    static authLogin(data) {
        return Vue.http.post('api/login', data)
    }

    static authRegister(data) {
        return Vue.http.post('api/register', data)
    }

    static checkEmail(email) {
        return Vue.http.post('api/check-email', { email : email })
    }

    static checkUserOrders(id, token) {
        return Vue.http.get(`api/user-orders/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })
    }

    static getUser(token) {
        return Vue.http.get('api/user', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })
    }

    static saveUser(data, token) {
        data = JSON.parse(JSON.stringify(data));
        Object.keys(data).forEach(item => !data[item] && delete data[item]);
        return Vue.http.put(`api/user/${data.id}`, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })
    }

}
