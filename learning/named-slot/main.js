
Vue.component('modal', {
    template: `
    
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    
                    <header class="modal-card-head">
                        <p class="modal-card-title">
                            My Modal
                        </p>
                        <button class="delete"></button>
                    </header>

                    <section class="modal-card-body">
                        <slot></slot>
                    </section>
                    
                    <footer class="modal-card-foot">
                        <a class="button is-primary">Save changes</a>
                        <a class="button">Cancel</a>
                    </footer>

                </div>
            </div>
    `

});



new Vue({
    el:'#root'
})