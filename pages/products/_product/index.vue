<template>
    <div class="one-product">
        <div class="container-product">
            <div class="link">
                <span>Home</span> /
                <span>Products</span> /
                <span class="link-active">{{item.description_english}}</span>
            </div>
            <div class="header-container-one-product" style="justify-content: space-between;">
                <div class="container-photo">
                    <div class="main-photo">
                        <img src="./../../../assets/main-photo.png">
                    </div>
                    <div class="main-photo-small">
                        <div><img src="./../../../assets/main-photo.png"></div>
                        <div><img src="./../../../assets/main-photo.png"></div>
                    </div>
                </div>
                <div class="product-description" style="width: 100%;">
                    <div>
                        <div>Brand: <span style="font-weight: bold">{{item.brand_name}}</span></div>
                        <div class="container-description">
                            <div class="container-description-text">
                                <div class="name-product">
                                    {{item.description_english}}
                                </div>
                                <div class="name-product" style="position: relative">
                                    Part number: <span style="font-weight: bold">{{item.part_number}}</span>
                                    <!--<div class="arrow-superseeded">-->
                                    <!--<div class="arrow-image"></div>-->
                                    <!--<div class="container-arrow-text">-->
                                    <!--Superseeded:-->
                                    <!--<div class="arrow-text">1626-21011</div>-->
                                    <!--</div>-->
                                    <!--</div>-->
                                </div>
                                <div class="name-product">
                                    Weight (kg):<span style="font-weight: bold">{{item.weight_physical}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-table">
                        <app-table :type="'header'" :from="5"
                                   :to="9" :background="'#ECF0F3'"></app-table>
                        <app-table
                                :from="5"
                                :to="9"
                                :item="item">
                        </app-table>
                    </div>
                </div>

            </div>
            <div class="container-about-product">
                <!--<div class="item-about-product">-->
                    <!--<div class="name-item-about-product">-->
                        <!--Part fits:-->
                    <!--</div>-->
                    <!--<div class="description-item-about-product">-->
                        <!--Toyota Land Cruiser 40 Series FJ40, FJ43, FJ45 This valve does not work on diesel models-->
                    <!--</div>-->
                <!--</div>-->
                <div class="item-about-product">
                    <div class="name-item-about-product">
                        Important General Information:
                    </div>
                    <div class="description-item-about-product">
                        Part's compatibility depends on Date of Production, Model and Country of Origin. Please do no
                        assume if your truck is listed above it automatically confirms compatibility. If you are not
                        sure whether this part fits your vehicle, please contact us before making a purchase and we will
                        be able to check it for you. In your message please include month and year of manufacture,
                        country of delivery and if possible frame number or VIN. Please also include the model version
                        that is in the format FJ40L-*****.
                    </div>
                </div>
            </div>
            <!--<div class="title-main">-->
                <!--Compatibility-->
            <!--</div>-->
            <!--<table class="COMPATIBILITY">-->
                <!--<tr>-->
                    <!--<th class="tw1" colspan="3">-->
                        <!--<div class="tw1 nested-text">Name</div>-->
                    <!--</th>-->
                    <!--<th class="tw2" colspan="3">-->
                        <!--<div class="tw2 nested-text">Model</div>-->
                    <!--</th>-->
                    <!--<th class="tw3">-->
                        <!--<div class="tw3 nested-text">Description</div>-->
                    <!--</th>-->
                    <!--<th class="tw4">-->
                        <!--<div class="tw4 nested-text">ProdPeriod</div>-->
                    <!--</th>-->
                    <!--<th class="tw5">-->
                        <!--<div class="tw5 nested-text">Options</div>-->
                    <!--</th>-->
                    <!--<th class="tw6">-->
                        <!--<div class="tw6 nested-text">Diagram</div>-->
                    <!--</th>-->
                <!--</tr>-->
                <!--<tr v-for="item in [1,2,3,4]">-->
                    <!--<td class="tw1" colspan="3">-->
                        <!--<div class="tw1 nested-text container-logo">-->
                            <!--<div class="logo"></div>-->
                            <!--<div style="font-weight: bold">TOYOTA</div>-->
                        <!--</div>-->
                    <!--</td>-->
                    <!--<td class="tw2" colspan="3">-->
                        <!--<div class="tw2 nested-text">ASV50L - CETSKY</div>-->
                    <!--</td>-->
                    <!--<td class="tw3">-->
                        <!--<div class="tw3 nested-text">ASV50</div>-->
                    <!--</td>-->
                    <!--<td class="tw4">-->
                        <!--<div class="tw4 nested-text">04.2015 - 06.2017</div>-->
                    <!--</td>-->
                    <!--<td class="tw5">-->
                        <!--<div class="tw5 nested-text">ATM, MTM: AUTOMATIC TRANSMISSION</div>-->
                    <!--</td>-->
                    <!--<td class="tw6">-->
                        <!--<div class="tw6 nested-text">-->
                            <!--<div class="logo logo-diagrams"></div>-->
                        <!--</div>-->
                    <!--</td>-->
                <!--</tr>-->
            <!--</table>-->
            <!--<div class="title-main">-->
                <!--Superseded and aftermarket-->
            <!--</div>-->
            <!--<div>-->
                <!--<div class="container-table">-->
                    <!--<app-table :type="'header'" :background="'#ECF0F3'"></app-table>-->
                <!--</div>-->
                <!--<div class="title-main-small">-->
                    <!--Superseded-->
                <!--</div>-->
                <!--<div class="container-table">-->
                    <!--<app-table :background="'#FBEEE6'"></app-table>-->
                <!--</div>-->
                <!--<div class="title-main-small">-->
                    <!--aftermarket-->
                <!--</div>-->
                <!--<div class="container-table">-->
                    <!--<app-table :background="'#DDEBF6'"></app-table>-->
                <!--</div>-->
                <!--<div class="container-table">-->
                    <!--<app-table :background="'#EAECEE'"></app-table>-->
                <!--</div>-->
            <!--</div>-->

        </div>
        <div class="other-products">
            <div class="other-products-container">
                <div class="title-main-small">
                    Customers also bought:
                </div>
                <div>
                    <carousel
                            @change="refreshEvent"
                            :interval="10000"
                            :data="setData">
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import table from "../../../common/mainElements/table";
    import {Search} from "../../../api/search";
    import { base64encode, base64decode } from 'nodejs-base64';
    import {CookieHelper} from "../../../helpers/cookie";
    import {Auth} from "../../../api/auth";
    import {Products} from "../../../api/products";
    import {Basket} from "../../../helpers/basket";
    export default {
        fetch({store,req}){
            const isHeader = req && req.headers && req.headers.cookie;
            const token= store.getters['cookie/getToken'];
            const options = {
                store: store,
                req: req,
                get: 'token'
            };

            const getUserInServer = (token) => Auth.getUser(token)
                .then(res => {
                    store.dispatch('auth/actionValue', {
                        name: 'userData',
                        data: res.body
                    });
                    return true
                })
                .catch(res => console.log(res));
            if (!isHeader && token) return getUserInServer(token);
            return CookieHelper.setCookieDataInStore(isHeader, options, getUserInServer)
                .then(res => console.log(res))
        },
        async asyncData({route}){
            const {data} = await Search.getSearchItem(JSON.parse(base64decode(route.params.product)));
            const getRandom = await Products.getRandomParts().then(res => ({items: res.body}));
            return {item: data, items: getRandom.items || []}
        },
        name: "index",
        components: {
            'app-table': table,
        },
        data(){
            return {
                set_Data: [],
                BASKET: new Basket(this.$store),
                allProducts:[],
            }
        },
        created(){
            this.allProducts = this.getProducts();
            this.setData = []
        },
        mounted(){
             this.addClick()
        },
        computed:{
            setData:{
                set(){
                    this.set_Data = [];
                    this.set_Data = [1,2,3].map(count => {
                        switch (count) {
                            case 1: const data1 = this.setHtmlCard(0);
                                return `<div class="containerCard containerCard-small">${data1}</div>`;
                            case 2: const data2 = this.setHtmlCard(3);
                                return `<div class="containerCard containerCard-small">${data2}</div>`;
                            case 3: const data3 = this.setHtmlCard(7);
                                return `<div class="containerCard containerCard-small">${data3}</div>`;
                        }
                    });
                    try {
                        this.refreshEvent()
                    } catch (e){

                    }

                },
                get(){
                    return this.set_Data
                }
            }
        },

        methods:{
            setHtmlCard(count){
                return [...this.items].splice(count,4).map((item, index) => {
                    let data = {...item};
                    console.log(this.allProducts.indexOf(data.unique_hash) > -1)
                    return  `<div class="container-carousel container-carousel-small" style="background: #ECF0F3;">
                                   <div class="test-card">
                                          <div class="picture-description">
                                                <div class="picture"></div>
                                                <div class="description">
                                                     ${data.description_english}
                                                </div>
                                          </div>
                                          <app-star :count="3"></app-star>
                                          <hr>
                                          <div class="disabledHash" id="customId${index}">${data.unique_hash}</div>
                                          <div class="total-add">
                                               <div class="card-price"><span>$</span>${data.price}</div>
                                               <div class="add-cart all-center
                                    ${this.allProducts.indexOf(data.unique_hash) > -1 ? 'active': ''}">
                                                    ADD TO CART
                                                </div>
                                          </div>
                                   </div>
                            </div>`
                        }).join(' ')
            },
            refreshEvent(){
                this.removeClick();
                setTimeout(() => {
                    this.addClick();
                },1000)
            },
            addCard(event){
                let currentCard = this.items
                    .find(data => data.unique_hash === event.target.parentNode.previousElementSibling.textContent);
                if(currentCard){

                    if (this.allProducts.indexOf(currentCard.unique_hash) > -1)  {
                        const index = this.getLocalStorageFindIndexThings(currentCard.unique_hash);
                        const activeRemove = index > -1;
                        activeRemove && this.BASKET.deleteThing(index);
                        this.allProducts = this.getProducts();
                        this.setData = [];
                        if(activeRemove) return this.toStore('info', 'Successfully removed from the basket');
                    }
                    const regex = /\d+/g;
                    const warehouses = currentCard.warehouse ? currentCard.warehouse.split(' ') : [];
                    currentCard.basket = {
                        active: true,
                        available: currentCard.qty,
                        qty: 1,
                        prices: currentCard.price,
                        unique_hashes: currentCard.unique_hash,
                    };

                    if(!currentCard.basket.warehousesNumber) {
                        currentCard.basket.warehousesNumber = warehouses[0] && warehouses[0].match(regex);
                        currentCard.basket.warehousesNumber = !currentCard.basket.warehousesNumber ? 1
                            : currentCard.basket.warehousesNumber[0];
                    }
                    !currentCard.basket.warehousesDay &&
                    (currentCard.basket.warehousesDay = this.dataDayFormat(warehouses[1]));

                    if (!currentCard.basket.active)    return this.toStore('error', 'Not available warehouse');
                    if (!currentCard.basket.available) return this.toStore('error', 'Not available parts');
                    if (currentCard.basket.qty < 1) return this.toStore('error', 'Not available parts');
                    currentCard.url = base64encode(JSON.stringify({
                        brand: currentCard.brand_name,
                        part_number: currentCard.part_number
                    }));
                    const action = ['categories', 'color', 'created_at',
                        'description_full', 'image', 'is_bundle',
                        'is_stock_ca', 'location', 'max_price',
                        'min_price', 'min_stock', 'modified_by',
                        'notes', 'part_fits', 'part_number_without_too_much',
                        'subst_for', 'tags', 'updated_at',
                        'id', 'qty', 'weight_volumetric', 'warehouse'];
                    action.forEach(item => currentCard.hasOwnProperty(item) && delete currentCard[item]);
                    this.BASKET.addThing(currentCard);
                    this.toStore('info', 'Successfully added to basket');
                    this.allProducts = this.getProducts();
                    this.setData = [];
                }

            },
            dataDayFormat(data) {
                if(!data) return '';
                const statics = data;
                const regex = /\d+/g;
                data && (data = data.match(regex));
                data && (data = data[data.length - 1]);
                if (data && data.indexOf(1) > -1) return `${statics} day`;
                return `${statics} days`;
            },
            getProducts(){
                return (this.BASKET.getAllThing() || [])
                    .map(item => item && item.basket && item.basket.unique_hashes)
                    .filter(item => item)
            },
            addClick(){
                document
                    .querySelectorAll('.add-cart')
                    .forEach(item => item.addEventListener('click',this.addCard));
            },
            toStore(type, mes) {
                this.$store.commit('error/setValue', {
                    name: 'data',
                    data: {type: type, text: mes, active: true}
                });
            },
            removeClick(){
                document
                    .querySelectorAll('.add-cart')
                    .forEach(item => item.removeEventListener('click',this.addCard));
            },
            getLocalStorageFindIndexThings (id) {
                return this.BASKET.getIndexThing(id)
            },
        }
    }
</script>

<style scoped>
    .one-product {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .container-product {
        width: 1100px;
    }

    .header-container-one-product {
        display: flex;
    }

    .main-photo img {
        width: 255px;
        max-width: 255px;
    }

    .main-photo {
        width: 100%;
    }

    .main-photo-small {
        display: flex;
    }

    .main-photo-small > div, .main-photo-small > div img {
        width: 51px;
        max-width: 51px;
        margin-right: 5px;
    }

    .container-photo {
        margin-right: 29px;
    }

    .product-description {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        letter-spacing: -0.06px;

        color: #32405B;
    }

    .container-description {
        margin-top: 31px;
        display: flex;
        justify-content: space-between;
    }

    .container-description-text {
        margin-right: 35px;
    }

    .container-description-text > div {
        margin-bottom: 37px;
    }

    .arrow-image {
        width: 9px;
        height: 16px;
        background-image: url("./../../../assets/arrow-down-right.png");
    }

    .arrow-text {
        font-weight: bold;
        color: #CA4635;
    }

    .arrow-superseeded {
        display: flex;
        position: absolute;
        left: 80px;
    }

    .container-arrow-text {
        margin-top: 3px;
        margin-left: 5px;
    }

    .container-about-product {
        width: 100%;
        margin-top: 55px;
        margin-bottom: 90px;
    }

    .item-about-product {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #32405B;
        margin-bottom: 17px;
    }

    .name-item-about-product {
        width: 152px;
        margin-right: 17px;
        font-weight: normal;
        font-size: 19.9986px;
        letter-spacing: -0.1px;

    }

    .description-item-about-product {
        background: #ECF0F3;
        border-left: 5px solid #CA4635;
        width: 100%;
        padding: 31px;
        font-size: 11.9995px;
        line-height: 15px;
    }

    .title-main {
        color: #32405B;
        letter-spacing: -0.1px;
        font-weight: bold;
        font-size: 20px;
        margin-left: 5px;
        margin-bottom: 30px;
        text-transform: uppercase;
    }

    .title-main-small {
        letter-spacing: -0.07px;
        font-weight: bold;
        font-size: 14px;
        color: #32405B;
        margin-left: 5px;
        margin-bottom: 21px;
        text-transform: uppercase;
    }

    .container-table {
        margin-bottom: 21px;
    }

    table.COMPATIBILITY {
        width: 100%;
        border-collapse: collapse;
        background: #ECF0F3;
        font-weight: bold;
        font-size: 11.289px;
        letter-spacing: -0.0566328px;
        color: #32405B;
        margin-bottom: 78px;
        height: 30px;
    }

    table.COMPATIBILITY th, table.COMPATIBILITY td {
        text-align: left;
        border-right: 2px solid white;
    }

    table.COMPATIBILITY tr {
        font-weight: normal;
        border-bottom: 2px solid white;
    }

    .tw1 {
        width: 134px;
        max-width: 134px;
    }

    .tw2 {
        width: 160px;
        max-width: 160px;
    }

    .tw3 {
        width: 160px;
        max-width: 160px;
    }

    .tw4 {
        width: 146px;
        max-width: 146px;
    }

    .tw5 {
        width: 325px;
        max-width: 325px;
    }

    .tw6 {
        width: 76px;
        max-width: 76px;
    }

    div.tw1, div.tw2, div.tw3, div.tw4, div.tw5, div.tw6 {
        padding: 6px 12px;
    }

    .container-logo {
        display: flex;
        justify-content: space-around;
    }

    .logo {
        width: 16px;
        height: 13px;
        background-image: url("./../../../assets/Logo.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .logo-diagrams {
        justify-self: flex-start;
        background-image: url("./../../../assets/diagrams.png");
        margin-left: 20px;
    }

    .other-products {
        width: 100%;
        background: #ECF0F3;
        margin-top: 25px;
        margin-bottom: 70px;
        display: flex;
        justify-content: center;
    }

    .other-products-container {
        width: 1100px;
        padding-top: 35px;
        padding-bottom: 43px;
    }

    .container-carousel {
        margin-top: 31px;
    }

</style>
