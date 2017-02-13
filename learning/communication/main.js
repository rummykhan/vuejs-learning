

Vue.component('coupon', {

    template:`<div>
                <label class="label">Coupon</label>
                <p class="control">
                  <input type="text" class="input" v-model="couponCode" placeholder="Enter coupon" v-on:blur="blurred" v-on:keyup="keyUp">
                </p>
              </div>`,
    data(){
        return {
            couponCode: ''
        }
    },
    methods:{
        blurred(){
            this.$emit('applied', [{couponCode:this.couponCode}]);
        },
        keyUp(){
            this.$emit('reset');
        }
    }


});



Vue.component('simple-component', {
    template: `<div>
                <input type="text" class="input" v-model="theName">
                <br><br><br>
                <test-component :myName="inner" @change="change"></test-component>
                </div>`,
    props:{
        name: {
            required: true
        },
        inner:{
            required: true
        }
    },
    data(){
        return {
          theName: null
        };
    },
    mounted(){
        this.$set(this, 'theName', this.name);
    },
    watch:{
        theName(name){
            this.$emit('change', {name});
        }
    },
    components:{
        'test-component': Vue.component('test-component', {
            template: `<input type="text" class="input" v-model="theName">`,
            props:{
                myName:{
                    required: true
                }
            },
            data(){
                return {
                    theName: ''
                }
            },
            watch:{
                theName(inner){
                    this.$emit('change', { inner });
                }
            },
            beforeMount(){
                this.$set(this, 'theName', this.myName);
            }
        })
    },
    methods:{
        change(data){
            this.$emit('inner', data);
        }
    }
});


new Vue({
    el: '#root',
    data(){
        return {
            isApplied: false,
            isInvalid: false,
            name: 'rummykhan',
            inner: 'inner'

        };
    },
    methods:{
        applied(couponCode){
            this.isApplied = true;
        },
        invalid(){
            this.isInvalid = true;
        },
        reset(){
            this.isApplied = false;
            this.isInvalid = false;
        },
        nameChanged(data){
            this.$set(this, 'name', data.name);
        },
        innerChanged(data){
            this.$set(this, 'inner', data.inner)
        }
    }
});