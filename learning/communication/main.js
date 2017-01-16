

Vue.component('coupon', {

    template:`<input type="text" v-model="couponCode" placeholder="Enter coupon" v-on:blur="blurred" v-on:keyup="keyUp">`,
    data(){
        return {
            couponCode: ''
        }
    },
    methods:{
        blurred(){
            console.log('code', this.couponCode);
            this.$emit('applied', [{couponCode:this.couponCode}]);
        },
        keyUp(){
            this.$emit('reset');
        }
    }


});


new Vue({
    el: '#root',
    data(){
        return {
            isApplied: false,
            isInvalid: false

        };
    },
    methods:{
        applied(couponCode){
            console.log(couponCode);
            this.isApplied = true;
        },
        invalid(){
            this.isInvalid = true;
        },
        reset(){
            this.isApplied = false;
            this.isInvalid = false;
        }
    }
})