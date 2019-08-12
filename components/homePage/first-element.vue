<template>
    <section class="Carousel-section">
        <!--<app-left-aside></app-left-aside>-->
        <div class="container-carousel">
            <carousel
                :interval="10000"
                :data="set_data">
            </carousel>
        </div>
        <!--<app-right-aside></app-right-aside>-->
    </section>
</template>

<script>
    import leftAside from './../../common/mainElements/leftAside'
    import rightAside from './../../common/mainElements/rightAside'
    export default {
        name: "first-element",
        components:{
            'app-left-aside'  : leftAside,
            'app-right-aside' : rightAside
        },
        data() {
            return {
                customers: [
                    {
                        fullName: 'Ramon Pfiefer',
                        star: 4,
                        title: 'Our customers',
                        description: 'Lorem ipsum dolor sit amet, consectetur' +
                            ' adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' +
                            ' aliqua. Ut enim ad minim veniam, quis',
                        profPhoto: require('./../../assets/caruselIcon/image.png'),
                        mapsPath: require('./../../assets/caruselIcon/MAP.png'),
                        carPhoto: require('./../../assets/caruselIcon/car.png')
                    }, {
                        fullName: 'John Doe',
                        star: 4,
                        title: 'Our customers',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
                            'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
                        profPhoto: require('./../../assets/caruselIcon/image1.png'),
                        mapsPath: require('./../../assets/caruselIcon/MAP1.png'),
                        carPhoto: require('./../../assets/caruselIcon/car1.png')
                    }, {
                        fullName: 'William Stone',
                        star: 4,
                        title: 'Our customers',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
                        profPhoto: require('./../../assets/caruselIcon/image2.png'),
                        mapsPath: require('./../../assets/caruselIcon/MAP2.png'),
                        carPhoto: require('./../../assets/caruselIcon/car2.png')
                    },

                ],
                isLeftMenuOpen: false,
                data: [],
            }
        },
        computed: {
            set_data() {
                return this.customers ? this.customers.map(item => {
                    return `<div class="container-slide">
                                <div class="customer-map-container">
                                    <div class="customer">
                                        <div class="customer-logo">
                                            <div class="customer-logo-small" style=""></div>
                                        </div>
                                        <div class="title">${item.title}</div>
                                        <div class="customer-car" style="background-image: url('${item.carPhoto}');"></div>
                                    </div>
                                    <div class="map" style="background-image: url('${item.mapsPath}');"></div>
                                </div>
                                <div class="about-customer-container">
                                    <div class="about-customer-content">
                                        <div class="about-photo" style="background-image: url('${item.profPhoto}');"></div>
                                        <div class="middle-about"></div>
                                        <div class="description-about">
                                              <div class="name">${item.fullName}</div>
                                              <app-star :count="${item.star}"></app-star>
                                              <div class="description">${item.description}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                }) : []
            }
        }
    }
</script>

<style scoped>
    .Carousel-section {
        margin-top: 33px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 52px;
    }

    .container-carousel {
        max-width: 1300px;
        width: 1300px;
        display: flex;
        justify-content: center;
    }


</style>
