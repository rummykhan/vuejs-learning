
Vue.component('list-item',{
    template: `<div class="column">
                  <div class="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img :src="item.background" alt="Image">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-left">
                            <figure class="image" style="height: 40px; width: 40px;">
                              <img :src="item.profile" alt="Image">
                            </figure>
                          </div>
                          <div class="media-content">
                            <p class="title is-4">{{ item.name }}</p>
                            <p class="subtitle is-6">{{ makeName(item.name) }}</p>
                          </div>
                        </div>
                    
                        <div class="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                          <a>#css</a> <a>#responsive</a>
                          <br>
                          <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                        <button class="button is-success" @click="removeMe">Remove</button>
                      </div>
                    </div>
                </div>`,
    props:['item'],
    methods:{
        removeMe(e){
            e.preventDefault();
            this.$emit('remove');
        },
        makeName(name){
            return '@'+name.toLowerCase().replace(/\s/g, '_');
        }
    }
});



const app = new Vue({
    el: '#app',
    data(){
        return {
            items:[
                {
                    name:'Angelina Jolie',
                    key: parseInt((Math.random()*100)),
                    background: 'http://7606-presscdn-0-74.pagely.netdna-cdn.com/wp-content/uploads/2016/03/Dubai-Photos-Images-Oicture-Dubai-Landmarks-800x600.jpg',
                    profile: 'http://www.gettyimages.com/gi-resources/images/Editorial-Images/Entertainment.jpg'
                },
                {
                    name:'Bob Smith',
                    key: parseInt((Math.random()*100)),
                    background: 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg',
                    profile: 'http://i56.servimg.com/u/f56/15/42/84/41/le-pri10.jpg'
                },
                {
                    name:'Do some Study',
                    key: parseInt((Math.random()*100)),
                    background: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png',
                    profile: 'http://media02.hongkiat.com/black-white-portraits/fisherman.jpg'
                },
                {
                    name:'Goto sleep',
                    key: parseInt((Math.random()*100)),
                    background: 'http://7606-presscdn-0-74.pagely.netdna-cdn.com/wp-content/uploads/2016/03/Dubai-Photos-Images-Travel-Tourist-Images-Pictures-800x600.jpg',
                    profile: 'https://www.rpphotographybydesign.co.uk/wp-content/uploads/2014/01/nlw200915pc027.jpg'
                }
            ]
        }
    },
    methods:{
        removeMe(item, index){
            this.items.splice(index, 1);
        }
    }
});