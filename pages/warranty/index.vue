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
                    <img src="./../../assets/warranty.png">
                    <span style="margin-left: 10px">WARANTY INFORMATION</span>
                </div>
                <div class="result-table">
                    <img src="./../../assets/warranty-image.png" class="flat-image">
                    <p>
                        All of the genuine Toyota Parts and Accessories are covered by 6-month warranty.
                        All rebuild parts are covered by 90 days warranty under normal use and service for 90 days
                        after the date of delivery with unlimited mileage. This warranty shall be limited to repairing
                        or replacing, at our option, the part or parts claimed to be defective within warranty period
                        after the date of delivery.
                    </p>


                    <p>
                        Inspection shall, at the option of CRUSIER ADDICTION, be performed at its location London Ontario,
                        Canada and all related freight charges shall be paid by the customer.
                    </p>

                    <p>
                        This warranty does not cover: parts that are not installed on the correct vehicle applications;
                        parts that are not properly installed; parts that are installed on vehicles for off-road usages;
                        deterioration of any part due to normal use and exposure; parts that haven’t received
                        manufacture's service or maintenance during warranty period, parts that have physical damage.
                    </p>

                    <p>
                        ARRANY IS VOIDED if Rebuild Injection Pump or injector has contaminated fuel issues, such
                        as biodiesel or WVO, or rust and corrosion inside the pump. CRUISER ADDICTION will not warranty
                        any fuel pump with the solenoid wire tapped. CRUISER ADDICTION shall under no circumstances be
                        liable for any incidental or consequential damage or any labour charges or any related expenses.
                    </p>

                </div>
                <div class="container-title">
                    CORE DEPOSIT
                </div>
                <div class="container-text">
                    <p>The core charge for fuel pump is $700.00, $50.00 per injector and will be fully refunded upon
                    receiving the old (exchange) unit back provided the core is fully assembled and in a repairable
                    state. Partial core credit may be issued for core that do not meet the core guidelines, refer
                    listed below.</p>

                    <p>Core must returned within 30 days to be eligible for full core deposit refund.
                    Core returned between 31 and 60 days will be eligible for up to 50% core deposit refund unless
                    previously discussed with CRUSIER ADDICTION representative.
                    If the core is not returned within 60 days, any and all warranties on the product purchased will
                    be void unless previously discussed with CRUSIER ADDICTION representative.
                    Upon authorization by the rebuilder that the core meets core return guidelines, CRUSIER ADDICTION
                    will refund the core deposit.
                    Refunds are usually processed 2-4 weeks after receipt by CRUSIER ADDICTION. Customer will be notified
                    in the event of a refused or reduced credit.</p>

                    <ul>
                        <h4> Core returns must meet these guidelines to be eligible for credit:</h4>
                        <li>Returned with a copy of core return documents</li>
                        <li>Bent or broken parts</li>
                        <li>Stripped threads or ports</li>
                        <li>Cracked, damaged or broken mounts</li>
                        <li>Cracked, damaged or broken housing</li>
                        <li>Heavy rust or corrosion</li>
                        <li>Missing or disassembled parts</li>
                        <li>Biodiesel, waste vegetable oil contamination</li>
                    </ul>
                    <ul>
                        <h4>Core deposit is non-refundable or reduced due to the following:</h4>
                        <li>Returned with a copy of core return documents</li>
                        <li>Received within 30 days of the original invoice date.</li>
                        <li>Fully assembled, complete and in rebuildable condition based on manufacturer's inspection
                            guidelines. Disassembled cores will not be accepted for refund.</li>
                        <li>Core must be for the same engine application.</li>
                        <li>Cores must be relatively clean. Please take 5 minutes to wipe down the core. Any core
                            returned deemed to be excessively dirty will be assessed a $100 cleaning fee.</li>
                    </ul>
                    <ul>
                        <h4>Core return instructions:</h4>
                        <li>Remove any items from the core that is needed for proper installation of the replacement
                            part. It is recommended you replace the exchange part before returning the core.
                            (Example: A/C Idle up, etc)</li>
                        <li>Empty all fluids from the core, if applicable.</li>
                        <li>Put the core in a sealed plastic bag that is provided to avoid leakage or drainage during
                            shipping.</li>
                        <li>Put bagged core in supplied shipping container/box. Include a copy of your RMA documents
                            in the package.</li>
                        <li>Customer's responsibility to package and secure the boxed core, using adequate packing
                            material to assure that it arrives undamaged.</li>
                        <li>Apply UPS supplied return label on the package and drop off the package at UPS store or
                            UPS shipping facility. UPS drop off locations can be found on UPS.COM</li>
                    </ul>
                </div>
                <div class="container-title">
                    WARRANTY CLAIMS
                </div>
                <div class="container-text">
                    <p>Customer satisfaction is our ultimate goal. All parts and accessories we sell are 100% warranted
                        against manufacture defects in material or quality. In the event you have warranty claim
                        (part installed and failed within the 6 months period), the following
                        procedure must be followed:</p>
                    <ul>
                        <h4>Core deposit is non-refundable or reduced due to the following:</h4>
                        <li>Returned with a copy of core return documents</li>
                        <li>Received within 30 days of the original invoice date.</li>
                        <li>Fully assembled, complete and in rebuildable condition based on manufacturer's inspection
                            guidelines. Disassembled cores will not be accepted for refund.</li>
                        <li>Core must be for the same engine application.</li>
                        <li>Cores must be relatively clean. Please take 5 minutes to wipe down the core. Any core
                            returned deemed to be excessively dirty will be assessed a $100 cleaning fee.</li>
                    </ul>
                    <p>All returned parts must be shipped complete. Any missing component on the warranty claim item
                        will result in denial of the warranty request. In addition, refunds cannot be made for warranty
                        parts, only replacement. Labor for installation of a warranty part is not reimbursable. Buyer
                        is responsible for shipping cost for the warranty claim.</p>

                    <p>The warranty claim will be denied if the part does not meet the manufacturer's warranty
                        guidelines (such as improper installation, abuse, physical damage, etc.).
                        If this happens, customer will be given the option to have the part back.</p>
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
</style>

