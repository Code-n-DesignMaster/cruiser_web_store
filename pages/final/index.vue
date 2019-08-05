<template>
    <div class="final">
        <div class="container-final">
            <div class="title">Thank you John Smith for your order. </div>
            <div class="order">
                Your order number:  <span>12332234</span>
            </div>
            <div class="save-pdf">
                <div class="conteiner-pdf">
                    <div class="pdf-text">
                        You can Print or Save your Invoice from PDF
                    </div>
                    <div class="variable-save">
                        <div class="basket-back-shop" style="margin-right: 20px">
                            <div class="basket-back-arrow pointer"></div>
                            <div class="basket-back-text pointer" @click="$router.push('/basket')">Save</div>
                        </div>
                        <div class="basket-back-shop">
                            <div class="basket-back-arrow pointer"></div>
                            <div class="basket-back-text pointer" @click="$router.push('/basket')">print</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="leave-message-final">
                <div class="final-title">
                    Please give us your comment or feedback about your experience<span>(optional):</span>
                </div>
                <div class="coupon-system-form">
                    <textarea
                            placeholder="Enter comments"
                            class="coupon-enter" style="margin-right: 0">
                    </textarea>
                </div>
                <div class="rates">
                    <div class="container-rates-star">
                        <div class="star-container">
                            <app-star ></app-star>
                            <div class="text">Rate us</div>
                        </div>
                        <div class="middle-star"></div>
                        <div class="star-container">
                            <app-star ></app-star>
                            <div class="text">Easy understanding on website</div>
                        </div>
                        <div class="middle-star"></div>
                        <div class="star-container">
                            <app-star ></app-star>
                            <div class="text">Сhance to recommend this site to friends</div>
                        </div>
                    </div>
                    <div class="submit">
                        submit
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .final{
        width: 100%;
        display: flex;
        margin-top: 46px;
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
    }
</style>
