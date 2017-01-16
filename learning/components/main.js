Vue.component('task', {
    template: '<li><slot></slot></li>'
});

var data = {
    tasks: [
        {name:'Go to Office'},
        {name:'Go to gym'},
        {name:'Do some Study'},
        {name:'Goto sleep'},
        {name:'Repeat'},
    ]
};

new Vue({
    el: '#app',
    data: data
});