Vue.component('modal', {
    template:
    '<div class="modal is-active">'+
    '<div class="modal-background"></div>'+
    '<div class="modal-content">'+
    '<p class="box">'+
        '<slot></slot>'+
    '</p>'+
    '</div>'+
    '<button class="modal-close" v-on:click="$emit(\'close\')"></button>'+
    '</div>',
});

new Vue({
    el: '#app',
    data:{
        showModal:false
    }
});