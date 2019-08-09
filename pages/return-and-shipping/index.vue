<template>
    <div class="search">
        <app-left-aside></app-left-aside>
        <div class="search-container">
            <div class="search-result-title">
                Home /
                <span class="search-result-title-number">Warranty</span>
            </div>
            <div class="container-result">
                <div class="result-background"></div>
                <div class="container-title">
                    <img src="./../../assets/return.png">
                    <span style="margin-left: 10px">WARANTY INFORMATION</span>
                </div>
                <div class="result-table">
                    <img src="./../../assets/warranty-image.png" class="flat-image">
                    <p>
                        We makes every effort to ensure all items in a customer's order
                        are delivered undamaged and in excellent condition. Please make sure to inspect your
                        package upon delivery and notify us immediately about any missing, damaged, or incorrect
                        items. If we are not notified of any problems with your package within 2 business days of
                        delivery, then it is assumed your items arrived in good condition and we is no longer liable
                        for damaged, missing, or incorrect items. We are not responsible for any installation
                        or service costs.
                    </p>

                    <p>
                        You may return stock products in new, unopened  and uninstalled condition
                        within 15 days of delivery for a full refund. Buyer is resposible for return shipping costs.
                    </p>
                </div>
                <div class="container-title">
                    CORE DEPOSIT
                </div>

                <div class="container-text">
                    <p>Electrical parts are non-returnable, regardless of reason or circumstance. We reserve the right
                        to reject any returned item that does not meet our guidelines stated above. All packages must
                        be postmarked two days prior to the 14th day or will be at risk for denial. The customer is
                        responsible for all costs of returning the item back to us and all shipping charges
                        are non-refundable</p>
                    <ul>
                        <h4>Non-returnable items include, but are not limited to:</h4>
                        <li>All electrical parts and components.</li>
                        <li>Bare engine assemblies.</li>
                        <li>Tools.</li>
                        <li>Printed materials.</li>
                        <li>Merchandising aids.</li>
                        <li>Special ordered items.</li>
                        <li>Hazmat labeled parts.</li>
                        <li>Controlled parts: parts that require a VIN for ordering so the manufacturer can ensure
                            the parts belong to the vehicle it is being installed to. Controlled parts include, but
                            are not limited to: emission labels, air bags, and seatbelts.</li>
                        <li>Any item that has been installed, altered, used, or otherwise no longer in brand new
                            condition.</li>
                        <li>Any item not purchased from us.</li>
                        <li>Any item with the genuine manufacturer label missing, damaged,
                            altered, or otherwise unreadable.</li>
                        <p>A 15% restocking fee may be applicable to all returned parts. Depending on the circumstances,
                            our RMA agents will determine special exceptions on a case by case basis.</p>
                    </ul>

                </div>
                <div class="container-title">
                    WSHIPPING
                </div>
                <div class="container-text">
                    <p>We can ship to virtually any address in the world. Note that there are restrictions on
                        some products, and some products cannot be shipped to international destinations.</p>

                    <p>   When you place an order, we will estimate shipping and delivery dates for you based on the
                        availability of your items and the shipping options you choose. Depending on the
                        shipping provider you choose, shipping date estimates may appear on the shipping quotes page.</p>
                    <p>    Please also note that the shipping rates for many items we sell are weight-based.
                        The weight of any such item can be found on its detail page. To reflect the policies
                        of the shipping companies we use, all weights will be rounded up to the next full pound.</p>

                </div>
            </div>
        </div>
        <app-right-aside style="align-self: flex-start;margin-top: 400px"></app-right-aside>
    </div>
</template>

<script>

    import leftAside from "../../common/mainElements/leftAside";
    import rightAside from "../../common/mainElements/rightAside";
    import table from "../../common/mainElements/table";
    import {mapGetters} from "vuex"
    import {Search} from "../../api/search";
    export default {
        components: {
            'app-left-aside': leftAside,
            'app-right-aside': rightAside,
            'app-table': table,
        }
    }
</script>

<style scoped lang="scss">
    .search {
        margin-top: 33px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .search-container {
        max-width: 1175px;
        width: 1175px;
    }

    .search-result-title {
        font-family: Montserrat;
        font-size: 20px;
        letter-spacing: -0.1px;
        color: #32405B;
        margin: 0 30px;
        margin-bottom: 30px;
    }

    .search-result-title-number {
        font-weight: bold;
    }

    .select-result-simple {
        margin: 0 30px;
    }



    .container-result {
        /*position: relative;*/
        /*width: 100%*/
        padding-top: 30px;margin: 0 20px;

    }

    .result-background {
        position: absolute;
        width: 100%;
        height: 375px;
        background: #ECF0F3;
        left: 0;
        z-index: -1;
        /*top: 0;*/
        margin-top: -30px;
    }

    .result-table {
        padding: 47px;
        background: #FFFFFF;
        box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.15);
        z-index: 5;
        margin-bottom: 40px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #32405B;
    }

    .result-table-header {
        display: flex;
    }

    .result-table-header .normal {
        font-weight: normal;
        padding-left: 0;
    }

    .result-table-header .no-right-border {
        border-right: none;
    }

    .result-table-main-result {
        margin-top: 2px;
        display: flex;
        flex-direction: column;
    }

    .result-table-main-result > div:first-child {
        padding: 0;
        width: 98px;
    }

    .result-aftermarket{
        margin: 0 20px;
        margin-bottom: 117px;
    }
    .title{
        text-transform: uppercase;
        font-size: 14px;
    }
    .flat-image{
        float:right;
        margin-top: -280px;
        margin-left: 10px;
        margin-right: -21px;
    }
    .container-title{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 0px;
        display: flex;
        align-items: center;
        color: #32405B;
        margin: 20px 10px;
        display: flex;
        margin-bottom: 40px;
    }
    .container-text{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #32405B;
        margin-bottom: 50px;
    }
    .container-text:last-child{
        margin-bottom: 150px;
    }
    ul{
        counter-reset: my-awesome-counter;
    }
    ul  li{
        list-style: none;
        counter-increment: my-awesome-counter;
        margin-bottom: 3px;
    }
    ul  li:before{
        content: '('counter(my-awesome-counter) ")";
        font-weight: bold;
    }
</style>

