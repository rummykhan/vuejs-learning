
window.Event = new class {

    constructor(){
        this.vue = new Vue();
    }


    fire(event, data=null){
        this.vue.$emit(event, data);
    }

    listen(event, callback){
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {

    template:`
    <p class="control has-icon has-icon-right">
        <input class="input" type="text" placeholder="Text input" v-model="couponCode" v-on:blur="blurred" v-on:keyup="keyUp">
        <span class="help is-success">{{ couponCode }}</span>
    </p>
    `,
    data(){
        return {
            couponCode: ''
        }
    },
    methods:{
        blurred(){
            Event.fire('applied', this.couponCode);
            this.couponCode = '';
        },
        keyUp(){
            Event.fire('reset');
        }
    },


});


new Vue({
    el: '#root',
    data(){
        return {
            isApplied: false,
            isInvalid: false,
            testFlag: 'rummykhan'
        };
    },
    mounted(){
        var el = this;

        Event.listen('reset', function(){
            el.isApplied = false;
            el.isInvalid = false;
        });

        Event.listen('applied', function(data){
        
            if ( data === 'rummykhan' ){
                el.isApplied = true;
                return true;
            }

            el.isInvalid = true;
        });
    }
})