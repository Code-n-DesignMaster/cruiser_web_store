import Vue from 'vue'

export class Country {

    static getCountries(data) {
        return Vue.http.get('api/countries');
    }

}
