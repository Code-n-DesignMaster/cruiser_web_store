<template>
    <div class="btn-group">
        <!--<div v-if="selectedOption.name_en">-->
            <!--<input type="text" @focus="showMenu = true" @blur="showMenu = false" :style="{-->
                    <!--height: `${height ? height : 20 }px`,-->
                    <!--minWidth: `${width ? width : 160 }px`-->
                <!--}"-->
                 <!--class="dropdown-toggle" :value="selectedOption.name_en">-->
                <!--<span class="caret" :class="showMenu && 'active'"></span>-->
        <!--</div>-->
        <!--v-if="!selectedOption.name_en"-->
        <div>
            <input @focus="open()" @blur="close()" :style="{
                    height: `${height ? height : 20 }px`,
                    minWidth: `${width ? width : 160 }px`
                }" v-model="text"
                 class="dropdown-toggle" :placeholder="placeholderText">
                <!--<span class="caret" :class="showMenu && 'active'"></span>-->
        </div>

        <ul class="dropdown-menu" v-if="showMenu && !(optionsFilter.length == 0)">
            <li v-for="option in optionsFilter" class="pointer" @click="updateOption(option)">
                <a>
                    {{ option.name_en }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: {
                    name_en: '',
                },
                showMenu: false,
                text: '',
                placeholderText: 'Please select country',
            }
        },
        props: {
            options: {
                type: [Array, Object]
            },
            height:{
                type: Number
            },
            width:{
                type: Number
            },
            selected: {},
            placeholder: [String]
        },

        mounted() {
            this.selectedOption = this.selected;
            this.text = this.selectedOption.name_en;
            if (this.placeholder) this.placeholderText = this.placeholder;
        },

        computed:{
            optionsFilter(){
                return this.options.filter(item => {
                    const textLocal = new String(item.name_en.toLowerCase());
                    return this.text ? textLocal.indexOf(this.text.toLowerCase()) > -1 : true
                })
            }
        },

        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.showMenu = false;
                this.text = this.selectedOption.name_en;
                this.$emit('updateOption', this.selectedOption);
            },
            close (){
                this.interval = setTimeout(() => {
                    this.showMenu = false;
                    if(this.text != this.selectedOption.name_en) {
                        this.selectedOption = {};
                        this.selectedOption.name_en = this.text;
                    }
                    this.$emit('updateOption', this.selectedOption);
                    clearInterval(this.interval);
                }, 1000)
            },
            open(){
                this.showMenu = true;
                clearInterval(this.interval)
            }
        }
    }
</script>

<style>

    .btn-group {
        min-width: 160px;
        position: relative;
        display: inline-block;
        z-index: 10000;
        vertical-align: middle;
        padding: 0!important;
    }
    .btn-group a:hover {
        text-decoration: none;
    }

    .dropdown-toggle {
        min-width: 160px;
        padding: 6px 10px;
        text-transform: none;
        font-weight: 300;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0s ease-out;
        float: none;
        box-shadow: none;
        border-radius: 0;
        background: #ECF0F3;
        color: #32405B;
        font-size: 12px;
    }
    .dropdown-toggle:hover {
        background: #e1e1e1;
        cursor: pointer;
    }

    .dropdown-menu {
        position: absolute;
        /*top: 100%;*/
        /*left: 0;*/
        z-index: 10000;
        width: 100%;
        /*float: left;*/
        min-width: 160px;
        overflow-y: scroll;
        max-height: 200px;
        padding: 5px 0;
        margin: 2px 0 0;
        list-style: none;
        font-size: 14px;
        text-align: left;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        background-clip: padding-box;
    }

    .dropdown-menu > li > a {
        padding: 10px 30px;
        display: block;
        clear: both;
        font-weight: normal;
        line-height: 1.6;
        color: #333333;
        white-space: nowrap;
        text-decoration: none;
    }
    .dropdown-menu > li > a:hover {
        background: #efefef;
        color: #409FCB;
    }

    .dropdown-menu > li {
        overflow: hidden;
        width: 100%;
        position: relative;
        margin: 0;
    }

    .caret {
        margin-left: 5px;
        margin-top: 5px;
        vertical-align: middle;
        border-top: 4px dashed;
        border-top: 4px solid \9;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        float: right;
    }
    .caret.active{
        transform: rotate(180deg);
    }

    li {
        list-style: none;
    }
</style>
