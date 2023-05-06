
// Events 1
// var myApplication = new Vue({
//     el: '#app',
//     data: {
//         title: 'Hello Vue.js',
//         link: 'http://toplearn.com'
//     },
//     methods: {
//         changeTitle: function (event) {
//             this.title = event.target.value;
//         },
//         sayHello: function () {
//             return 'Hello Toplearn';
//         },
//         sayBye: function () {
//             return this.title;
//         }
//     }
// });

// Events 2
// new Vue({
//     el: '#app',
//     data: {
//         counter: 5,
//         x: 0,
//         y: 0
//     },
//     methods: {
//         Increase: function (step, obj) {
//             debugger;
//             this.counter += step;
//         },
//         GetCursor: function (event) {
//             this.x = event.clientX;
//             this.y = event.clientY;
//         }
//     },
// });

// Events 3
new Vue({
    el: '#app',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        GetCursor: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        test: function (event) {
            event.stopPropagation();
        },
        alert: function () {
            alert('hello');
        }
    },
});