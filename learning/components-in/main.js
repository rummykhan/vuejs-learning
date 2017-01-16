Vue.component('task-list',{
    template: '<div><task v-for="task in tasks" v-text="task.name"></task></div>',
    data: function(){
        return {
            tasks:[
                {name:'Go to Office', complete:true},
                {name:'Go to gym', complete:true},
                {name:'Do some Study', complete:false},
                {name:'Goto sleep', complete:false},
                {name:'Repeat',complete:true}
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#app'
});