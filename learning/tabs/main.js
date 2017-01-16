Vue.component('tabs', {
   template: `
   <div>
           <div class="tabs">
              <ul>
                <li v-for="tab in tabs" v-bind:class="{ 'is-active': tab.isActive }">
                  <a v-bind:href="tab.href" v-text="tab.name" v-on:click="selectTab(tab)"></a>
                </li>
              </ul>
            </div>

            <div class="tab-details">
              <slot></slot>
            </div>
      </div>
   `,
    mounted(){
      
    },
    data(){
      return {
        tabs: []
      }
    },
    created(){
      this.tabs = this.$children; 
    },
    methods: {
      selectTab(selectedTab){
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name == selectedTab.name);
        })
      }
    }
});

Vue.component('tab', {
  props: {
    name:{ required: true },
    selected:{ default: false }
    },
  template: '<div v-show="isActive"><slot></slot></div>',
  data(){
    return {
      isActive:false
      }
    },
    
  mounted(){
    this.isActive = this.selected;
  },
  computed:{
    href(){
      return '#'+this.name.toLowerCase().replace(/ /g, '-');
    }
  }

});

new Vue({
   el:'#app'
});