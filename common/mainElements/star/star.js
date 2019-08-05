export default {
    components: {},
    props: ['count'],
    data() {
        return {
            dataCount: 0
        }
    },
    created() {
        this.dataCount = typeof this.count == 'undefined' ? 0 : this.count
    },
    mounted() {

    },
    methods: {
        change(item, operator){
            this.dataCount = eval(`${this.dataCount} ${operator} ${operator == '-' ?this.dataCount - item : item}`)
        },
        getCount(){
            return this.dataCount;
        }
    }
}
