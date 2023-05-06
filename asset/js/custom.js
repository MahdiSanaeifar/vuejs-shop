var myApplication = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        }
    }
});