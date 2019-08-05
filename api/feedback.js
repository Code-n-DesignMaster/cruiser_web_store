import Vue  from 'vue'
export class Feedback {
    static send(data){
        return Vue.http.post('api/reviews', data)
    }
}
