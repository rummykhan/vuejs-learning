

new Vue({
    el: '#app',
    data(){
        return {
            number: 0,
            html: '<input type="text" v-model.number="number">'
        }
    }
});