import basket from './../basket/index'
import {Basket} from "../../../helpers/basket";
import {mapGetters} from "vuex";
export default {
    name: 'app-header',
    components: {
        basket: basket
    },
    props: ['isBasketOpen'],
    data() {
        return {
            menu_page: [
                'PRODUCTS',
                'ABOUT US',
                'Number',
                'FAQ',
                'CUSTOMER’S PROJECTS',
                'POLICIES',
                'WARRANTY',
                'NEWS',
                'CONTACT US',
                'BRANDS'
            ],
            isMenu: false,
            isBeforeMenu: false,
            isPaddingMenu: false,
            searchText: '',
            countData: 0
        }
    },
    created() {
        this.count = this.getCountBAsket()
    },
    computed: {
        count: {
            get() {
                return this.countData
            },
            set() {
                this.countData = this.getCountBAsket()
            }
        },
        ...mapGetters({
            snackbar: 'error/get_data_error_or_message'
        }),
    },
    watch: {
        'snackbar'() {
            this.countData = this.getCountBAsket()
        }
    },
    methods: {
        toggleBasket(flag) {
            flag && this.isBasketOpen && this.$emit('getActiveBasket', !this.isBasketOpen);
            if (flag) return;
            this.$emit('getActiveBasket', !this.isBasketOpen)
        },
        changeValueSearch() {
            this.$store.commit('search/setValue', {
                name: 'searchText',
                data: this.searchText
            });
            this.$router.history.current.name !== 'search' && this.$router.push('/search')
        },
        getCountBAsket() {
            return Basket.getAllThing().length
        }
    }
}
