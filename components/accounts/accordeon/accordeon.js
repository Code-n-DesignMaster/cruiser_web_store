export default {
    name: 'tab-component',
    components: {},
    props: ['items'],
    data() {
        return {
            active: false,
        }
    },
    computed: {},
    mounted() {

    },
    methods: {
        activeTab (index){
            this.items = this.items.map(item => {
                item.active = false;
                return item;
            });
            this.items[index].active = true;
        },
        date (date){
            return date.split(' ')[0]
        },
        total (item){
            let arr = JSON.parse(JSON.stringify(item.order.data))
                .map(order => Number(order.count) * Number(order.price));
            arr.push(0, 0);
            return arr.reduce((a, b) => a + b)
        }
    }
}
