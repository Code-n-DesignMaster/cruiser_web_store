<template>
    <section class="products">
        <div class="products-container">
            <div style="display: flex; justify-content: space-between; align-items: center">
                <div class="link">
                    <span>Home</span> /
                    <span class="link-active"> Cart</span>
                </div>
                <div style="display: flex;" class="pointer" @click="$router.replace('products')">
                    <div class="button-continue-checkout-back-image"></div>
                    <div class="button-continue-checkout button-continue-checkout-back">Continue shoping</div>
                </div>
            </div>
            <div class="products-all-header">
                <div>Order summary</div>
            </div>
            <div class="products-all">
                <div class="table-products table-products-header" style="margin-bottom: 20px">
                    <div class="post post-1">
                        <div>Picture</div>
                    </div>
                    <div class="post post-2">
                        <div>Brand</div>
                    </div>
                    <div class="post post-3">
                        <div>Name</div>
                    </div>
                    <div class="post post-4">
                        <div>Price</div>
                    </div>
                    <div class="post post-5">
                        <div>Quantity</div>
                    </div>
                    <div class="post post-6">
                        <div>Subtotal</div>
                    </div>
                </div>
                <div class="table-products table-products-items"
                     v-for="(item, index) in items" style="display: grid;">
                    <div class="post post-1 product-container">
                        <div>{{index + 1}}</div>
                        <div class="product-image" :style="{backgroundImage: 'url(' + setImage(0, item) + ')'}"></div>
                    </div>
                    <div class="post post-2 product-container">
                        <div class="item pointer all-center">
                            {{item.brand_name}}
                        </div>
                    </div>
                    <div class="post post-3 product-container">
                        <div class="item name-container" style="width: 100%">
                            <div class="name">
                                <div style="width: 100%">{{item.description_english}}</div>
                            </div>
                            <div class="name">Part number :
                                <span
                                        style="font-weight: bold; cursor: pointer"
                                        @click="toProductRouter(item)">{{item.part_number}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="post post-4 product-container">
                        <div class="item all-center">${{item.basket.prices}}</div>
                    </div>
                    <div class="post post-5 product-container" >
                        <div class="item item-qty">
                            <div class="all-center item-shop-basket-count pointer" @click="toggleQty(item, '-')">
                                -
                            </div>
                            <div  class="quantity">{{item.basket && item.basket.qty}}</div>
                            <div class="all-center item-shop-basket-count pointer" @click="toggleQty(item, '+')">
                                +
                            </div>
                        </div>
                    </div>
                    <div class="post post-6 product-container key-delete">
                        <div class="item">{{subtotal(item.basket && item.basket.unique_hashes).toFixed(2)}}</div>
                        <div class="icon-delete" @click="deleteThingsInBasket(index)"></div>
                    </div>
                </div>
            </div>
            <div class="products-all-header products-all-total">
                <div style="display: flex">
                    <div class="post-5" style="border-right: 2px solid white; width: 70px">{{getTotalQty}}pcs</div>
                    <div class="post-6" style="width: 125px;">${{getTotalPrice.toFixed(2)}}</div>
                </div>
            </div>
            <div class="coupon-system">
                <div class="title-coupon">USE COUPON CODE</div>
                <div class="coupon-system-form">
                    <input placeholder="Enter discount code" class="coupon-enter">
                    <div class="button-add-coupon">Apply discount</div>
                </div>
            </div>
            <div class="container-shipping">
                <div class="shipping">
                    <div style="font-weight: bold;font-size: 14px;">Shipping Methods</div>
                    <div style="font-weight: bold;font-size: 10px;">to</div>
                    <dropdown
                            :height="19"
                            :options="arrayOfObjects"
                            :selected="object"
                            @updateOption="methodToRunOnSelect($event)">
                    </dropdown>
                    <input style="width: 200px" placeholder="Enter Zip or postal code" @change="save" class="coupon-enter">
                    <div class="button-add-coupon search" @click="search()">Search</div>
                </div>
                <div class="shipping-checkbox table"
                     :style="{overflowX: data.rates.length <= 5 ? 'hidden' : 'scroll'}">
                    <div class="postt" :style="{minWidth: data.rates.length <= 5 ? 'calc(100% / 6)' : '150px'}">
                        <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px">
                            <input type="radio" id="simple1"
                                   :checked="data.simple.select"
                                   name="fieldset-1" @click="active('simple')"/>
                            <label for="simple1"></label>
                        </div>
                        <div class="image">

                        </div>
                        <div class="date" >
                            <span  :style="{opacity: '0'}">{{ 'wqew' }}</span>
                        </div>
                        <div class="price">
                            No transportation
                        </div>
                        <div class="date">
                            {{data.simple.value ? '$' + data.simple.value : ''}}
                        </div>
                    </div>
                    <div class="postt" v-for="(item, key) in data.rates"
                         :style="{minWidth: data.rates.length <= 5 ? 'calc(100% / 6)' : '150px'}">
                        <div class="close" v-if="!(item && item.service_name)"></div>
                        <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px">
                            <input type="radio" :id="'simple' + (key + 1)"
                                   :checked="item && item.select"
                                   name="fieldset-1" @click="active('rates', key)"/>
                            <label :for="'simple' + (key + 1)"></label>
                        </div>
                        <div
                                class="image"
                                v-if="item && item.url"
                                :title="item && item.service_name"
                                :style="{backgroundImage: `url(${item && item.url})`}">
                        </div>
                        <div class="date">
                            <span  :style="{opacity: item ? '1' : '0'}">{{item? item.service_name : 'wqew'}}</span>
                        </div>
                        <div class="price">
                            {{(item && item.max_delivery_date) | dayFormat }}
                        </div>
                        <div class="date">
                            {{ item && item.value ? '$' + item ? item.value: '' : ''}}
                        </div>
                    </div>
                </div>
            </div>
            <div style="background: #DADADA;width: 100%;height: 1px; margin-bottom: 20px"></div>
            <div class="all-total">
                <div class="total-container">
                    <div class="total">total:<span>${{getTotalPrice.toFixed(2)}}</span></div>
                    <div class="button-continue-checkout pointer"  @click="Continue()">continue to checkout</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {CookieHelper} from "../../helpers/cookie";
    import {Basket} from "../../helpers/basket";
    import Dropdown from "../../common/Dropdown";
    import {Products} from "../../api/products";
    import * as cookie from "cookie";
    import {Country} from "../../api/country";
    import {base64encode} from 'nodejs-base64';
    import {enviroment} from "../../config";
    import no from './../../assets/no.png'

    export default {
        fetch({store,req}){

            const isHeader = req && req.headers && req.headers.cookie;

            const options = {
                store: store,
                req: req,
                get: 'token'
            };

            if(isHeader) {
                const data = cookie.parse(req.headers.cookie);
                const Token = data['token'];
                const basket = data['basket-data'];
                data['token'] && store.dispatch('cookie/action_cookie',{
                    name: 'token',
                    data: Token
                });

                data['basket-data'] && store.dispatch('cookie/action_cookie',{
                    name: 'basket',
                    data: basket
                });
            }


            const BASKET = new Basket(store);
            let items = BASKET.getAllThing() || store.getters['cookie/getAllThing'];
            if(items && items != 'undefined'){
                items = (items && typeof items == 'string' ? JSON.parse(items) : items) || []
            } else {
                items = []
            }

            return CookieHelper.setCookieDataInStore(isHeader, options)
                .then(() => {
                    const newArray = JSON.parse(JSON.stringify(items));
                    let arrayHash = newArray
                        .map(item => (item.basket && item.basket.unique_hashes) || item.unique_hash)
                        .filter(item => item);
                    return Products.getAvailableProductsInBasket(arrayHash)
                })
                .then(res => {
                    const data = res.body;
                    const dataDayFormat = (data) => {
                        if(!data) return '';
                        const statics = data;
                        const regex = /\d+/g;
                        data && (data = data.match(regex));
                        data && (data = data[data.length - 1]);
                        if (data && data.indexOf(1) > -1) return `${statics} day`;
                        return `${statics} days`;
                    };
                    items = items.map(item => {
                        const find = data
                            .find(prod => {
                                let hash = ((item.basket && item.basket.unique_hashes) || item.unique_hash);
                                return hash === prod.unique_hash
                            });
                        if(!find) return item;
                        Object.keys(item).forEach(key => {
                            `${item[key]}` && `${find[key]}` && (item[key] == find[key])
                            const regex = /\d+/g;
                            const warehouses = item.warehouses ? item.warehouses.split(' ') : [];
                            item.basket.warehousesNumber = warehouses[0] && warehouses[0].match(regex);
                            item.basket.prices = item.price || item.basket.prices;
                            item.basket.available = item.qty || item.basket.available ;
                            item.basket.warehousesNumber = !item.basket.warehousesNumber ?
                                1 : item.basket.warehousesNumber[0];
                            !item.basket.warehousesDay && (item.basketwarehousesDay = dataDayFormat(warehouses[1]));
                        });
                        return item
                    });
                    store.dispatch('cookie/action_cookie',{
                        name: 'basket',
                        data: items
                    });
                    return Country.getCountries()
                })
                .then(res => store.commit('country/setValue',{
                    name:'countries', data: res.body.sort((a, b) => a.name_en.localeCompare(b.name_en))
                }))
                .catch(res => console.log(res))
        },

        components: {
            'dropdown': Dropdown,
        },
        data() {
            return {
                BASKET: new Basket(this.$store),
                items:[],
                url: enviroment.url,
                data: {
                    simple: {
                        inCanada: true,
                        select: false,
                        value: '0.99'
                    },
                    rates: this.setDefaultArray()
                },
                shippings: this.importAll(require.context('~/assets/shipping/', false, /\.(png|jpg|jpeg)$/))
            }
        },


        created(){
            this.items = this.getItems();
            if(this.arrayOfObjects.length == 0){
                Country.getCountries()
                    .then(res => this.$store.commit('country/setValue', {
                        name: 'countries', data: res.body.sort((a, b) => a.name_en.localeCompare(b.name_en))
                    }))
                    .catch(res => console.log(res))
            }
        },

        mounted(){
            this.BASKET.setAllData(this.$store.getters['cookie/getAllThing']);
        },

        computed: {

            getTotalPrice() {
                return this.sum(this.items, true);
            },

            getTotalQty(){
                return this.sum(this.items, false);
            },

            arrayOfObjects(){
                return this.$store.getters['country/getAllCountry']
            },

            object(){
                return this.$store.getters['country/getCurrent']
            }

        },
        filters:{
            dayFormat(value){
                if(!value) return '';
                let timeDiff = Math.abs(new Date(value).getTime() - new Date().getTime());
                let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                return `${diffDays} ${diffDays > 1? 'days' : 'day'}`
            }
        },
        methods: {

            subtotal(hash){
                if(!hash) return 0;
                const data = this.items.find(item => item.basket && item.basket.unique_hashes === hash);
                if(!data || !data.basket) return 0;
                return  +data.basket.prices * data.basket.qty
            },

            active(flag, index) {
                flag == 'rates' && (this.data[flag] = this.data[flag].map(item => {
                    item.select = false;
                    return item;
                }));

                this.data.simple.select = false;
                flag == 'rates' ? this.data[flag][index].select = true : this.data[flag].select = true;
            },

            setDefaultArray(def = 0){
                return Array.apply(null, {length: 5 - def}).map(Number.call, Number)
            },

            toProductRouter(data) {
                data.url = base64encode(JSON.stringify({
                    brand: data.brand_name,
                    part_number: data.part_number
                }));
                this.$router.push(`/products/${data.url}`)
            },

            sum(items, type){
                if(items.length == 0) return 0;
                return JSON.parse(JSON.stringify(items))
                    .map(item => type ? Number(item.basket.prices) * Number(item.basket.qty) : item.basket.qty)
                    .reduce((a,b) => a + b)
            },

            importAll(r) {
                let arr = [];
                r.keys().forEach((key) => arr.push({url: r(key), key: key}));
                return arr;
            },

            Continue(){
                localStorage.setItem('data', JSON.stringify({
                    data:this.data,
                    postal_code:this.postal_code,
                    country:this.$store.getters['country/getCurrent']
                }));
                this.$router.push('check-out')
            },

            toggleQty(data, operation) {

                if (!data.basket.active)    return this.toStore('error', 'Not available warehouse');
                if (!data.basket.available) return this.toStore('error', 'Not available parts');
                if (data.basket.qty == data.basket.available && operation == '+'){
                    return this.toStore('error', 'Not available parts');
                }
                if (data.basket.qty == 0 && operation == '-'){
                    return this.toStore('error', 'Qty cannot be less than 0');
                }
                let basketContainer = this.BASKET.getThingByIndex(data.basket.unique_hashes);
                const basketItemIndex = this.getLocalStorageFindIndexThings(data.basket.unique_hashes);
                data.basket.qty = eval(`${data.basket.qty} ${operation} 1`);
                basketContainer&& basketContainer.basket && (basketContainer.basket.qty = data.basket.qty);
                if(basketContainer && basketItemIndex > -1){
                    this.BASKET.changeItemInBasketByIndex(basketItemIndex, basketContainer);
                    this.toStore('info', 'Successfully update basket');
                }
                this.items = this.getItems()
            },

            getLocalStorageFindIndexThings (id) {
                return this.BASKET.getIndexThing(id)
            },

            toStore(type, mes) {
                this.$store.commit('error/setValue', {
                    name: 'data',
                    data: {type: type, text: mes, active: true}
                });
            },

            getItems(){
                const items = this.BASKET.getAllThing() || this.$store.getters['cookie/getAllThing'];
                return  (typeof items == 'string' ? JSON.parse(items) : items) || []
            },

            methodToRunOnSelect(payload) {
                this.$store.commit('country/setValue',{name:'country', data: payload})
            },

            deleteThingsInBasket(index) {
                this.BASKET.deleteThing(index);
                this.$store.commit('error/setValue', {
                    name: 'data',
                    data: {type: 'red', text: 'Successfully removed from the basket', active: true}
                });
                this.items = this.getItems()
            },
            save(e){
                if(!e.target.value) return;
                this.postal_code = e.target.value;
            },
            search(){
                window.$nuxt.$loading.start();
                Products.staticgetCareer({
                    country:this.$store.getters['country/getCurrent'].code,
                    postal_code: this.postal_code,
                    city: 'цук',
                    first_name: 'цук',
                    last_name: 'цук',
                    street_address: 'цк',
                    phone: '2342323',
                }, this.items)
                    .then(res=> {
                        let data = res.body.rates
                            .sort((a, b) => a.total_price - b.total_price);
                        this.data.rates = data.map((item, index) => {
                            item.value = item && item.total_price ? item.total_price : 0;
                            item.select = false;
                            item.index = index;
                            this.shippings.forEach(img => {
                                if(item) {
                                    let arr = item.service_name.split(' ');
                                    img.key.indexOf(arr[0].toLowerCase()) > -1 && (item.url = img.url)
                                }
                            });
                            return item;
                        });
                        this.data.rates.length < 5
                        &&
                        (this.data.rates = this.data.rates.concat(this.setDefaultArray(this.data.rates.length)));
                        window.$nuxt.$loading.finish();
                    })
                    .catch(() => {
                        this.toStore('error', 'Invalid Data');
                        window.$nuxt.$loading.finish();
                    })
            },
            setImage(index, item){
                let url;
                try{
                    url =  JSON.parse(item.images)[index]
                } catch (e){}
                return url ? this.url + 'images/parts/' + url : no;
            },
        }
    }
</script>

<style scoped>
    .products {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .products-container {
        width: 1100px;
    }

    .table-products {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        background: #ECF0F3;
        font-weight: bold;
        font-size: 10px;
        line-height: 0px;
        letter-spacing: -0.0566328px;
        color: #32405B;
    }
    .table-products-header {
          margin-bottom: 4px;
          background: #FFFFFF;
    }

    .table-products-header .post{
        border-right: 1px solid #ECF0F3;
    }

    .table-products:hover{
        background: #e4e5e6!important;
    }

    .post {
        /*height: 30px;*/
        border-right: 1px solid #FFFFFF;
    }

    .post > div {
        padding: 15px 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .table-products-items{
        margin-bottom: 1px;
    }

    .table-products-items .post {
        /*height: 40px;*/
    }

    .table-products-items .post > div {
        padding: 20px 10px;
    }

    .post > div.item {
        font-weight: normal;
        font-size: 12px;
    }

    .post-1 {
        width: 100px;
        max-width: 100px;
        grid-area: post-1;
        grid-column: 1;
    }

    .post-2 {
        width: calc(124px + 57px);
        max-width: calc(124px + 57px);
        grid-area: post-2;
        grid-column: 2
    }

    .post-3 {
        width: 430px;
        max-width: 439px;
        grid-area: post-3;
        grid-column: 3
    }

    .post-4 {
        width: 105px;
        max-width: 105px;
        grid-area: post-4;
        grid-column: 4
    }

    .post-5 {
        width: 105px;
        max-width: 105px;
        grid-area: post-5;
        grid-column: 5
    }

    .post-6 {
        width: 145px;
        max-width: 145px;
        grid-area: post-6;
        grid-column: 6
    }

    .paginate-container li{
        list-style: none;
        margin-right: 8px;
    }
    .paginate-container li:last-child{
        margin-right: 0;
    }
    .paginate-container li {
        background: rgba(255, 255, 255, 0.0001);
        border: 1px solid #D4D7DE;
        width: 40px;
        height: 40px;
    }

    .paginate-container li a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #32405B;
        font-weight: normal;
        font-size: 13px;
        line-height: 20px;

    }

    .paginate-container li.active a {
        background: #32405B;
        font-weight: bold;
        color: #FFFFFF;
    }

    .paginate-container li.disabled a, .paginate-container li:first-child a, .paginate-container li:last-child a{
        font-weight: bold!important;
        color: #D4D7DE!important;
        font-size: 13px!important;
        line-height: 20px!important;
    }

    .paginate-container li.disabled:not(.paginate-container li:first-child, .paginate-container li:last-child){
        border: none;
    }
    .container-paginate{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-top: 23px;
        margin-bottom: 76px;
    }
    .products-all{
        background: #ECF0F3;
        padding: 14px;
    }
    .products-all-header{
        background: #91A0BC;
        width: 100%;
        max-width: 100%;
    }
    .products-all-header div{
        padding: 15px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: -0.12px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .products-all-total{
        background: #ECF0F3;
        margin-top: 2px;
    }
    .products-all-total{
        display: flex;
        justify-content: flex-end;
        align-items: center;

    }
    .products-all-total div{
        padding: 6px 12px;
        font-weight: bold;
        font-size: 12px;
        line-height: 0px;
        letter-spacing: -0.0566328px;
        text-transform: uppercase;
        color: #32405B;

    }

    .item-qty{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 12px!important;
    }

    .item-shop-basket-count{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        background: white;
        color: #32405B
    }

    .quantity{
        margin: 0 12px;
    }

    .table-products-items .post{
        border-right: #ECF0F3;
    }

    .table-products-items{
        border-bottom: 2px solid #FFFFFF;
    }

    .table-products-items:last-child{
        border-bottom: none;
    }

    .coupon-system{
        margin-top: 25px;
    }

    .coupon-system .title-coupon{
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: -0.12px;
        text-transform: uppercase;
        color: #32405B;
        margin: 14px 0;
    }

    .coupon-system > .coupon-system-form{
        display: flex;
    }

    .coupon-enter{
        background: #ECF0F3;
        width: 100%;
        padding: 11px 15px;
        border: none;
        margin-right: 20px;
    }

    .button-add-coupon{
        background: #32405B;
        padding: 10px 30px;
        color: #FFFFFF;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        line-height: 20px;
        width: 160px;
    }

    .container-shipping{
        box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.15);
        margin-bottom: 40px;
    }

    .shipping{
        display: flex;
        align-items: center;
        background: #91A0BC;
        width: 100%;
        max-width: 100%;
        margin-top: 20px;
        padding: 10px 0;
    }

    .shipping div {
        padding: 14px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: -0.12px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    .shipping input{
        padding: 8px 15px;
        padding-bottom: 7px;
        margin-left: 20px;
    }

    .table{
        display: flex;
        grid-template-columns: repeat(6, 1fr);
        background: #FFFFFF;
        font-weight: bold;
        font-size: 10px;
        line-height: 0px;
        letter-spacing: -0.0566328px;
        color: #32405B;
        padding: 17px 0;
    }
    .postt {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        border-right: 1px solid #D4D7DE;
        width: calc(100% / 6);
        color: #32405B;
        font-weight: normal;
        font-size: 10px;
        line-height: 16px;
        letter-spacing: -0.07px;
    }

    .postt:last-child{
        border-right: none;
    }
    .styled-input-single label:before {
        margin: 0;
        margin-top: -3px;
    }
    .postt .image{
        width: 100%;
        height: 40px;
        background-image: url("./../../assets/gruz.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;
        margin-bottom: 10px;
    }
    .postt .date{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F3F6F8;
    }
    .postt .price{
        display: flex;
        justify-content: center;
        align-items: center;margin-top: 10px;
    }
    .all-total{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .button-continue-checkout{
        width: 300px;
        height: 20px;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        line-height: 20px;
        background: #32405B;
    }
    .button-continue-checkout-back-image{
        width: 20px;
        height: 20px;
        background-color: #CA4635;
        background-image: url("./../../assets/back-arrow.png");
        background-repeat: no-repeat;
        background-position: center;
        padding: 10px;
    }
    .button-continue-checkout-back{
        width: 200px;
    }
    .total-container{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-bottom: 100px;
    }
    .total-container .total{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        letter-spacing: -0.0566328px;
        text-transform: uppercase;
        color: #32405B;
        margin-bottom: 20px;
    }
    .total-container .total span{
        font-weight: bold;
        font-size: 22px;
        letter-spacing: -0.123562px;
        text-transform: uppercase;
        color: #CA4635;
    }
    .product-image{
        width: 65px;
        height: 53px;
        padding: 0!important;
        background-image: url("./../../assets/test_cart.png");
        background-size: contain;
        background-position: center;
    }
    .product-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .key-delete{
        display: flex;
        justify-content: space-around;
    }
    .icon-delete{
        width: 11px;
        height: 11px;
        background-image: url("./../../assets/close.svg");
        background-repeat: no-repeat;
        cursor: pointer;
        background-position: center;
    }
    .post > div.item {
        min-height: 50px;
        font-weight: normal;
        font-size: 12px;
    }

    .post > div.item.name-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: calc(100% - 20px);
    }
    .post > div.item > .name{
        width: 170px;

        display: flex;
        line-height: 15px;
    }
    .post > div.item > .name div{
        /*height: 60px;*/
        width: 100%;
        margin-bottom: 5px;
        word-break: break-all;
        /*white-space: pre-wrap;*/
        /*overflow-x: hidden;*/
        padding-right: 5px;
        /*text-overflow: ellipsis;*/
    }

    .post > div.item div{
        /*min-height: 20px;*/
    }
    .key-delete{
        display: flex;

        justify-content: space-around;
    }
    .key-delete .item{
        min-height: auto!important;
    }
    .close{
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        background: white;
        opacity: 0.6;
        top: 0;
        left: 0;
    }
    .search{
        width: 62px;
        padding: 5px 14px!important;
        cursor: pointer;
    }
</style>

