Vue.component('message',{
    props:['title', 'body'],
    data: function(){
        return {
            isVisible:true
        }
    },
    template:
        '<article class="message" v-show="isVisible">'+
        '<div class="message-header">'+
            '{{ title }}'+
            '<button type="button" v-on:click="isVisible=false">X</button>'+
        '</div>'+
        '<div class="message-body">'+
        '{{ body }}'+
        '</div>'+
        '</article>',
    methods: {
        hideModal: function(){

        }
    }
});

new Vue({
    el: '#app'
});