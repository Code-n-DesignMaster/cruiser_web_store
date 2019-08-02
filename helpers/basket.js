var cookie = require('cookie');
export class Basket {
    self = null;
    constructor(data){
        this.self = data
    }

    addThing(item){
        let all_data = this.getAllThing('basket-data');
        all_data.push(item);
        return this.setAllData(all_data)
    }

    getAllThing(){
        let DOC;
        try {
            DOC = document;
        } catch (e){
            return null;
        }
        const data = cookie.parse(DOC && DOC.cookie || '');
        let arr = [];
        Object.keys(data).forEach(item => item.indexOf('basket') > -1 && arr.push(JSON.parse(data[item])))
        return arr;
    }

    deleteThing(index){
        let all_data = this.getAllThing();
        // all_data.splice(index, 1);
        all_data.forEach((item, ind) => {
            if(index == ind) {
                let date = new Date(Date.now() - 86400e3);
                date = date.toUTCString();
                return document.cookie = cookie.serialize(`basket${ind}`, JSON.stringify(item), {
                    maxAge:0
                })
            }
            document.cookie = cookie.serialize(`basket${ind}`, JSON.stringify(item))
        })
    }

    getIndexThing(id){
        let all_data = this.getAllThing() || this.self.getters['cookie/getAllThing'];
        typeof all_data == 'string' && (all_data = JSON.parse(all_data));
        let indexReturn = -1;
        if(!all_data && !Array.isArray(all_data)) return indexReturn;
        all_data.find((item, index) => {
            const search = item && item.basket && item.basket.unique_hashes == id;
            search && (indexReturn = index);
            return search
        });
        return indexReturn
    }

    setAllData(all_data){
        all_data.forEach((item, index) => document.cookie = cookie.serialize(`basket${index}`, JSON.stringify(item)) )
    }

    getThingByIndex(id){
        const index = this.getIndexThing(id);
        const getAllThing = this.getAllThing() || this.self.getters['cookie/getAllThing'];
        return getAllThing && index > -1? getAllThing[index] : null
    }

    changeItemInBasketByIndex(index, item){
        let data = this.getAllThing() || this.self.getters['cookie/getAllThing'];
        data && data[index] ? data.splice(index, 1, item) : null;
        this.setAllData(data)
    }

}
