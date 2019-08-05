<template>
    <div class="final" id="final">
        <div class="container-final">
            <div class="title">Thank you {{dataPayment && dataPayment.user && dataPayment.user.first_name}}
                {{dataPayment && dataPayment.user && dataPayment.user.last_name}} for your order. </div>
            <div class="order">
                Your order number:  <span>{{dataPayment && dataPayment.order_id}}</span>
            </div>
            <div class="save-pdf">
                <div class="conteiner-pdf">
                    <div class="pdf-text">
                        You can Print or Save your Invoice from PDF
                    </div>
                    <div class="variable-save">
                        <div class="basket-back-shop" style="margin-right: 20px">
                            <div class="basket-back-save pointer"></div>
                            <div class="basket-back-text pointer">Save</div>
                            <!--@click="createPDF"-->
                        </div>
                        <div class="basket-back-shop">
                            <div class="basket-back-print pointer"></div>
                            <div class="basket-back-text pointer">print</div>
                            <!--@click="print-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="leave-message-final" v-if="isComment">
                <div class="final-title">
                    Please give us your comment or feedback about your experience<span>(optional):</span>
                </div>
                <div class="coupon-system-form">
                    <textarea
                            v-model="comment"
                            placeholder="Enter comments"
                            class="coupon-enter" style="margin-right: 0">
                    </textarea>
                </div>
                <div class="rates">
                    <div class="container-rates-star">
                        <div class="star-container">
                            <app-star ref="one"></app-star>
                            <div class="text">Rate us</div>
                        </div>
                        <div class="middle-star"></div>
                        <div class="star-container">
                            <app-star ref="two"></app-star>
                            <div class="text">Easy understanding on website</div>
                        </div>
                        <div class="middle-star"></div>
                        <div class="star-container">
                            <app-star ref="three"></app-star>
                            <div class="text">Сhance to recommend this site to friends</div>
                        </div>
                    </div>
                    <div class="submit" @click="submitComment">
                        submit
                    </div>
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
                     v-for="(item, index) in (dataPayment && dataPayment.data ? dataPayment.data : [])"
                     style="display: grid;">
                    <div class="post post-1 product-container">
                        <div>{{index + 1}}</div>
                        <div class="product-image"></div>
                    </div>
                    <div class="post post-2 product-container">
                        <div class="item pointer all-center">
                            {{item.brand_name}}
                        </div>
                    </div>
                    <div class="post post-3 product-container">
                        <div class="item name-container" style="width: 100%">
                            <div class="name">
                                <div style="width: 100%"> {{item.description_english}}</div>
                            </div>
                            <div class="name">Part number :
                                <span
                                        style="font-weight: bold; cursor: pointer"
                                        @click="toProductRouter(item)">{{item.part_number}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="post post-4 product-container">
                        <div class="item all-center">${{item.price}}</div>
                    </div>
                    <div class="post post-5 product-container" >
                        <div class="item item-qty all-center">
                            {{item.count}}
                        </div>
                    </div>
                    <div class="post post-6 product-container key-delete">
                        <div class="item all-center">${{(Number(item.price) * item.count).toFixed(2)}}</div>
                    </div>
                </div>
            </div>
            <div class="total">
                <div>
                    Discount:  0
                </div>
                <div>
                    Fedex one day:  {{(dataPayment && dataPayment.user && dataPayment.user.shipping.value)}} USD
                </div>
                <div>
                    Taxes GST-ON:  {{(dataPayment && dataPayment.user && dataPayment.user.shipping.value)}} CAD
                </div>
                <div class="all-total">
                    PayPal
                    <svg width="68" height="17" style="margin: 0 10px" viewBox="0 0 68 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8167 1.281C12.0365 0.392036 10.6262 0.0109163 8.82212 0.0109163H3.58595C3.40736 0.0108213 3.23459 0.0744522 3.09874 0.190356C2.9629 0.30626 2.87289 0.466825 2.84492 0.643162L0.665629 14.4673C0.655524 14.5314 0.659446 14.597 0.677125 14.6595C0.694804 14.7219 0.72582 14.7798 0.768036 14.8292C0.810252 14.8785 0.862665 14.9181 0.921662 14.9452C0.98066 14.9724 1.04484 14.9864 1.10978 14.9863H4.34236L5.15424 9.83844L5.12907 9.99965C5.15651 9.82367 5.24591 9.66326 5.38118 9.54734C5.51644 9.43142 5.68868 9.36761 5.86684 9.3674H7.40297C10.4207 9.3674 12.7836 8.14205 13.4738 4.59738C13.4944 4.49255 13.5121 4.39051 13.5274 4.2908C13.7325 2.98065 13.526 2.0889 12.8172 1.28147"
                              fill="#003087"/>
                        <path d="M52.3914 7.85944C52.1938 9.15655 51.2029 9.15655 50.2447 9.15655H49.6994L50.0821 6.73473C50.1054 6.58843 50.2312 6.4808 50.3794 6.4808H50.6297C51.2822 6.4808 51.8983 6.4808 52.2161 6.85214C52.4058 7.07438 52.4631 7.40425 52.3914 7.85944ZM51.9743 4.47505H48.3595C48.2398 4.47511 48.124 4.51782 48.033 4.59553C47.9419 4.67323 47.8815 4.78084 47.8627 4.89903L46.4021 14.1647C46.3953 14.2076 46.398 14.2515 46.4098 14.2933C46.4217 14.3352 46.4424 14.374 46.4707 14.407C46.4989 14.4401 46.534 14.4666 46.5735 14.4849C46.613 14.5031 46.6559 14.5126 46.6994 14.5127H48.5543C48.7272 14.5127 48.8745 14.3869 48.9015 14.2164L49.3163 11.5886C49.3545 11.3449 49.5652 11.1646 49.8122 11.1646H50.9559C53.3375 11.1646 54.7114 10.0134 55.0703 7.72992C55.232 6.73193 55.0768 5.94733 54.6093 5.39802C54.0953 4.7942 53.1841 4.47458 51.9747 4.47458"
                              fill="#009CDE"/>
                        <path d="M26.6102 7.85949C26.4126 9.1566 25.4218 9.1566 24.4631 9.1566H23.9178L24.3004 6.73477C24.3237 6.58848 24.4496 6.48085 24.5978 6.48085H24.848C25.5005 6.48085 26.1167 6.48085 26.4345 6.85219C26.6247 7.07443 26.682 7.40429 26.6102 7.85949ZM26.1931 4.47509H22.5783C22.3313 4.47509 22.1207 4.65493 22.082 4.89907L20.6209 14.1647C20.6141 14.2077 20.6167 14.2516 20.6285 14.2935C20.6403 14.3353 20.6611 14.3742 20.6893 14.4072C20.7176 14.4403 20.7527 14.4669 20.7922 14.4851C20.8317 14.5033 20.8747 14.5127 20.9182 14.5127H22.6445C22.8915 14.5127 23.1017 14.3329 23.1404 14.0888L23.5352 11.5891C23.5734 11.345 23.784 11.1652 24.031 11.1652H25.1747C27.5563 11.1652 28.9302 10.0134 29.2891 7.72997C29.4508 6.73198 29.2956 5.94738 28.8282 5.39807C28.3141 4.79424 27.403 4.47463 26.1936 4.47463L26.1931 4.47509ZM34.5854 11.1861C34.4176 12.1748 33.6332 12.8387 32.6317 12.8387C32.1297 12.8387 31.7275 12.677 31.4693 12.3714C31.213 12.0686 31.117 11.6367 31.1981 11.1563C31.3538 10.176 32.1516 9.49112 33.1378 9.49112C33.6295 9.49112 34.028 9.65419 34.2918 9.96263C34.557 10.2734 34.6614 10.7076 34.5854 11.1861ZM36.9977 7.81756H35.2668C35.1948 7.81747 35.1252 7.84311 35.0705 7.88985C35.0158 7.93659 34.9796 8.00134 34.9685 8.07241L34.893 8.55603L34.7718 8.38085C34.3971 7.83713 33.5615 7.65495 32.7272 7.65495C30.815 7.65495 29.1815 9.10395 28.8636 11.1353C28.6981 12.1496 28.933 13.1183 29.5082 13.7943C30.0362 14.4154 30.7898 14.674 31.6879 14.674C33.2296 14.674 34.0844 13.6843 34.0844 13.6843L34.007 14.1652C34.0002 14.2082 34.0028 14.2522 34.0147 14.2941C34.0265 14.336 34.0473 14.3748 34.0756 14.4079C34.1039 14.441 34.1391 14.4675 34.1786 14.4857C34.2182 14.5039 34.2613 14.5133 34.3048 14.5132H35.8633C36.1103 14.5132 36.321 14.3338 36.3597 14.0892L37.2955 8.16606C37.3023 8.12303 37.2996 8.07905 37.2877 8.03715C37.2758 7.99525 37.2549 7.95642 37.2266 7.92334C37.1983 7.89027 37.1631 7.86372 37.1235 7.84554C37.0839 7.82736 37.0408 7.81797 36.9972 7.81802"
                              fill="#003087"/>
                        <path d="M60.3634 11.1861C60.1956 12.1748 59.4113 12.8387 58.4097 12.8387C57.9078 12.8387 57.5055 12.677 57.2474 12.3714C56.991 12.0686 56.895 11.6367 56.9761 11.1563C57.1318 10.176 57.9292 9.49112 58.9158 9.49112C59.4075 9.49112 59.806 9.65419 60.0698 9.96263C60.335 10.2734 60.4394 10.7076 60.3634 11.1861ZM62.7757 7.81756H61.0448C60.9728 7.81747 60.9032 7.84311 60.8485 7.88985C60.7938 7.93659 60.7576 8.00134 60.7465 8.07241L60.671 8.55603L60.5498 8.38085C60.1751 7.83713 59.3395 7.65496 58.5052 7.65496C56.5935 7.65496 54.9599 9.10395 54.6416 11.1353C54.4762 12.1496 54.7115 13.1183 55.2866 13.7943C55.8147 14.4154 56.5683 14.674 57.4664 14.674C59.0086 14.674 59.8633 13.6843 59.8633 13.6843L59.786 14.1652C59.779 14.2081 59.7815 14.2521 59.7932 14.294C59.8049 14.3359 59.8256 14.3747 59.8539 14.4079C59.8821 14.441 59.9172 14.4675 59.9568 14.4857C59.9963 14.5039 60.0393 14.5133 60.0829 14.5132H61.6409C61.8879 14.5132 62.0986 14.3338 62.1377 14.0892L63.0735 8.16606C63.0803 8.12303 63.0776 8.07905 63.0657 8.03715C63.0538 7.99525 63.033 7.95642 63.0046 7.92334C62.9763 7.89027 62.9411 7.86372 62.9015 7.84554C62.8619 7.82736 62.8188 7.81797 62.7753 7.81803"
                              fill="#009CDE"/>
                        <path d="M46.2178 7.81799H44.4775C44.3112 7.81799 44.156 7.90046 44.0627 8.03837L41.6625 11.5719L40.6451 8.17628C40.6141 8.07271 40.5505 7.98189 40.4638 7.91727C40.3771 7.85265 40.2719 7.81768 40.1637 7.81752H38.4537C38.4058 7.81755 38.3585 7.829 38.3159 7.85094C38.2733 7.87287 38.2365 7.90466 38.2086 7.94365C38.1807 7.98264 38.1625 8.02772 38.1555 8.07515C38.1486 8.12258 38.153 8.17098 38.1685 8.21635L40.084 13.8381L38.2822 16.3796C38.2504 16.4247 38.2316 16.4777 38.2278 16.5328C38.224 16.5879 38.2354 16.643 38.2608 16.692C38.2862 16.741 38.3246 16.7821 38.3718 16.8109C38.4189 16.8396 38.4731 16.8548 38.5283 16.8549H40.2667C40.4308 16.8549 40.585 16.7743 40.6792 16.6391L46.4648 8.29089C46.4962 8.24576 46.5147 8.1929 46.5182 8.13803C46.5216 8.08316 46.51 8.02839 46.4846 7.97966C46.4591 7.93092 46.4208 7.89009 46.3738 7.86159C46.3267 7.83309 46.2728 7.81801 46.2178 7.81799Z"
                              fill="#003087"/>
                        <path d="M64.8196 4.7298L63.3357 14.165C63.3289 14.208 63.3316 14.252 63.3435 14.2938C63.3553 14.3357 63.3761 14.3745 63.4044 14.4076C63.4327 14.4406 63.4679 14.4672 63.5074 14.4854C63.5469 14.5036 63.5899 14.513 63.6335 14.5131H65.1253C65.3723 14.5131 65.583 14.3332 65.6217 14.0891L67.0846 4.82298C67.0915 4.77997 67.0888 4.736 67.077 4.6941C67.0652 4.6522 67.0444 4.61336 67.0161 4.58027C66.9877 4.54719 66.9526 4.52063 66.913 4.50245C66.8734 4.48426 66.8304 4.47488 66.7868 4.47494H65.1174C65.0455 4.47476 64.976 4.50032 64.9214 4.54699C64.8667 4.59365 64.8306 4.65834 64.8196 4.72933"
                              fill="#009CDE"/>
                        <path d="M12.8167 1.281C12.0365 0.392036 10.6262 0.0109163 8.82212 0.0109163H3.58595C3.40736 0.0108213 3.23459 0.0744522 3.09874 0.190356C2.9629 0.30626 2.87289 0.466825 2.84492 0.643162L0.665629 14.4673C0.655524 14.5314 0.659446 14.597 0.677125 14.6595C0.694804 14.7219 0.72582 14.7798 0.768036 14.8292C0.810252 14.8785 0.862665 14.9181 0.921662 14.9452C0.98066 14.9724 1.04484 14.9864 1.10978 14.9863H4.34236L5.15424 9.83844L5.12907 9.99965C5.15651 9.82367 5.24591 9.66326 5.38118 9.54734C5.51644 9.43142 5.68868 9.36761 5.86684 9.3674H7.40297C10.4207 9.3674 12.7836 8.14205 13.4738 4.59738C13.4944 4.49255 13.5121 4.39051 13.5274 4.2908C13.7325 2.98065 13.526 2.0889 12.8172 1.28147"
                              fill="#003087"/>
                        <path d="M6.02677 4.30814C6.05127 4.15406 6.12989 4.01376 6.24853 3.9124C6.36718 3.81104 6.51807 3.75528 6.67413 3.7551H10.7792C11.2653 3.7551 11.7187 3.78678 12.1331 3.85294C12.3596 3.88938 12.5837 3.93948 12.8042 4.00297C13.0546 4.07334 13.2969 4.16985 13.5271 4.2909C13.7331 2.98029 13.5261 2.089 12.8172 1.2811C12.0366 0.392602 10.6268 0.011484 8.82266 0.011484H3.58603C3.40759 0.0116107 3.23505 0.0753396 3.09939 0.191224C2.96374 0.307108 2.87387 0.467552 2.84592 0.64373L0.665702 14.4665C0.655529 14.5306 0.659384 14.5962 0.677002 14.6587C0.69462 14.7212 0.725583 14.7791 0.767756 14.8285C0.809929 14.8778 0.862309 14.9175 0.921288 14.9447C0.980267 14.9719 1.04444 14.986 1.10939 14.986H4.34244L5.15431 9.83761L6.02677 4.30814Z"
                              fill="#003087"/>
                        <path d="M13.5269 4.29055C13.5109 4.39306 13.493 4.49527 13.4733 4.59712C12.7831 8.14133 10.4202 9.36715 7.40244 9.36715H5.86584C5.6877 9.36728 5.51548 9.43108 5.38028 9.54702C5.24507 9.66296 5.15578 9.82341 5.12854 9.9994L4.34183 14.9856L4.11812 16.4001C4.10923 16.4563 4.11262 16.5137 4.12806 16.5684C4.14351 16.6231 4.17064 16.6739 4.20759 16.7171C4.24454 16.7603 4.29042 16.795 4.34208 16.8188C4.39374 16.8426 4.44994 16.8549 4.50681 16.8549H7.23186C7.55437 16.8549 7.82841 16.62 7.87921 16.3018L7.90578 16.163L8.41938 12.909L8.452 12.7292C8.47642 12.575 8.55508 12.4346 8.67384 12.3332C8.7926 12.2318 8.94365 12.1761 9.09982 12.1761H9.50762C12.1474 12.1761 14.2143 11.1045 14.8184 8.00342C15.07 6.70818 14.9395 5.62586 14.2731 4.86596C14.0614 4.63036 13.8086 4.43536 13.5269 4.29055Z"
                              fill="#009CDE"/>
                        <path d="M12.8044 4.00307C12.6991 3.97186 12.5905 3.9439 12.4786 3.91921C12.3668 3.89452 12.2512 3.87262 12.1328 3.85398C11.718 3.78642 11.265 3.75474 10.7785 3.75474H6.67389C6.51766 3.75455 6.36651 3.81025 6.24778 3.91177C6.12905 4.01329 6.05057 4.15392 6.02654 4.30825L5.15407 9.83865L5.12891 9.99939C5.15615 9.8234 5.24544 9.66295 5.38064 9.54701C5.51585 9.43107 5.68807 9.36727 5.86621 9.36714H7.40281C10.4205 9.36714 12.7834 8.14179 13.4737 4.59711C13.4942 4.49228 13.5114 4.39072 13.5273 4.29054C13.345 4.19519 13.1551 4.11509 12.9596 4.05106C12.9088 4.03429 12.8571 4.01845 12.8044 4.00261"
                              fill="#012169"/>
                    </svg>
                    Grand Total Paid:
                    <span>
                        ${{getTotalPrice.toFixed(2)}}
                    </span>
                </div>
            </div>
            <div class="back-to-home">
                <div class="basket-back-shop">
                    <div class="basket-back-home pointer"></div>
                    <div class="basket-back-text pointer">Save</div>
                    <!--@click="createPDF"-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Basket} from "../../helpers/basket";

    let html2canvas;
    let jsPDF;
    if (process.client) {
        jsPDF = require('jspdf');
        html2canvas = require('html2canvas');
    }
    import { base64encode, base64decode } from 'nodejs-base64';
    import {Feedback} from "../../api/feedback";
    export default {
        name: "index",
        data(){
            return {
                comment: '',
                dataPayment:{},
                Basket: new Basket(this.$store),
                isComment: true
            }
        },
        created(){
            const hash = this.$router.history.current.query.result;
            this.dataPayment = hash && typeof hash == 'string' && JSON.parse(base64decode(hash));
        },
        mounted(){
            this.Basket.deleteAllThing();
            this.toStore('info', 'Successful purchase');
        },
        computed:{
            getTotalPrice(){
                if(this.dataPayment.data.length == 1 ) {
                    return Number(this.dataPayment.data[0].price) * Number(this.dataPayment.data[0].count)
                        + Number((this.dataPayment && this.dataPayment.user ? this.dataPayment.user.shipping.value : 0));
                }
                return [...this.dataPayment.data, ...[0]]
                    .map(item => Number(item.price) * Number(item.count))
                    .reduce((a,b) => a + b) + Number((this.dataPayment && this.dataPayment.user ? this.dataPayment.user.shipping.value : 0))
            }
        },
        methods:{
            submitComment(){
                let obj = {
                    order_id: this.dataPayment.order_id,
                    rate: this.$refs['one'].getCount(),
                    understanding: this.$refs['two'].getCount(),
                    recommend: this.$refs['three'].getCount(),
                    comment: this.comment
                };
                window.$nuxt.$loading.start();
                Feedback.send(obj)
                    .then(() => {
                        window.$nuxt.$loading.finish();
                        this.isComment = false;
                    })
            },
            toProductRouter(data) {
                data.url = base64encode(JSON.stringify({
                    brand: data.brand_name,
                    part_number: data.part_number
                }));
                this.$router.push(`/products/${data.url}`)
            },
            toStore(type, mes) {
                this.$store.commit('error/setValue', {
                    name: 'data',
                    data: {type: type, text: mes, active: true}
                });
            },
            print(){
                // let printContents = document.getElementById('final').innerHTML;
                // let originalContents = document.body.innerHTML;
                //
                // document.body.innerHTML = printContents;
                //
                // window.print();
                //
                // document.body.innerHTML = originalContents;
            },
            createPDF () {
                // const doc = new jsPDF();
                // const contentHtml = window.document.body;
                // let canvasElement = document.createElement('canvas');
                // html2canvas(contentHtml).then( (canvas) => {
                //     const img = canvas.toDataURL("image/png", 0.5);
                //     canvas.width = 100;
                //     canvas.height = 100;
                //     var ctx1 = canvas.getContext("2d");
                //     ctx1.rect(0, 0, 100, 100);
                //     ctx1.fillStyle = 'white';
                //     ctx1.fill();
                //     ctx1.putImageData(img, 0, 0);
                //     doc.addImage(canvas.toDataURL("image/png", 0.5),'JPEG',0,0);
                //     doc.save("sample.pdf");
                // });
            }
        }
    }
</script>

<style scoped>
    .final{
        width: 100%;
        display: flex;
        margin-top: 46px;
        margin-bottom: 82px;
        justify-content: center;
    }
    .container-final{
        width: 1100px;
    }
    .order span{
        color:#CA4635;
        font-weight: bold;
    }
    .title{
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 0px;
        letter-spacing: -0.1px;
        color: #32405B;
    }
    .order, .pdf-text{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #32405B;
    }
    .title, .order{
        margin-bottom: 24px;
    }

    .save-pdf{
        box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.15);
        width: 100%;
        margin-bottom: 97px;
    }
    .save-pdf .conteiner-pdf {
        width: calc(100% - (23px * 2));
        padding: 23px;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    .variable-save{
        display: flex;
    }

    .basket-back-shop {
        display: flex;
    }

    .basket-back-arrow {
        width: 32px;
        height: 32px;
        background-color: #91A0BC;
        background-image: url("./../../assets/back-arrow.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .basket-back-text {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 11.3214px;
        display: flex;
        align-items: center;
        text-align: right;
        text-transform: uppercase;
        padding: 9px 20px;
        background: #32405B;
        color:#FFFFFF;
    }

    .basket-back-text:hover {
        background: #586A8C;
    }

    .basket-back-text:active {
        background: #CA4635;
    }

    .final-title{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #32405B;
        margin-bottom: 15px;
    }
    .final-title span {
        font-weight: normal;
    }

    .coupon-system > .coupon-system-form {
        display: flex;
    }

    .coupon-system{
        margin-bottom: 22px;
    }

    .coupon-enter {
        background: #ECF0F3;
        width: calc(100% - (15px * 2));
        padding: 11px 15px;
        border: none;
        margin-right: 20px;
    }

    .coupon-enter::placeholder{
        font-size: 12px;
        color: #BABABA;
    }

    .rates{
        padding-top:10px;
        padding-bottom: 75px;
        margin-bottom: 73px;
        border-bottom: 1px solid #DADADA;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .container-rates-star{
        display: flex;
    }

    .middle-star{
        width: 1px;
        margin: 0 32px;
        background: #DADADA;
    }

    .container-rates-star .text{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #32405B;
        margin-top: 11px;
    }

    .submit{
        width: 210px;
        height: 36px;
        background: #D4D7DE;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        text-transform: uppercase;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        cursor: pointer;
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

    }

    .post > div {
        padding: 15px 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .table-products-items{
        margin-bottom: 1px;
        margin-top: 10px;
        border-bottom: 1px solid #FFFFFF;
    }
    .table-products-items:last-child{
        border-bottom: none;
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
        width: 124px;
        max-width: 124px;
        grid-area: post-2;
        grid-column: 2
    }

    .post-3 {
        width: calc(430px + 57px);
        max-width: calc(439px + 57px);
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
    .product-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
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

    .product-image{
        width: 65px;
        height: 53px;
        padding: 0!important;
        background-image: url("./../../assets/test_cart.png");
        background-size: contain;
    }
    .total{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .total{
        margin-top: 20px;
    }
    .total div{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        margin-top: 20px;
        text-align: right;
        letter-spacing: -0.07px;

        color: #32405B;
    }
    .total div.all-total{
        display: flex;
        font-weight: bold;
        margin-top: 40px;
    }

    .total div.all-total span{
        font-weight: bold;
        font-size: 22px;
        color: #CA4635;
    }

    .back-to-home{
        width: 100%;
        display: flex;
        margin-top: 40px;
        justify-content: flex-end;
    }
    .basket-back-save, .basket-back-print, .basket-back-home {
        width: 32px;
        height: 32px;
        background-color: #91A0BC;
        background-image: url("./../../assets/arrow-save.png");
        background-repeat: no-repeat;
        background-position: center;
    }
    .basket-back-print{
        background-image: url("./../../assets/print.png");
        background-color: #CA4635;
    }
    .basket-back-home{
        background-image: url("./../../assets/back-home.png");
        background-color: #CA4635;
    }

</style>
