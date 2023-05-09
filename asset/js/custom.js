
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
// new Vue({
//     el: '#app',
//     data: {
//         x: 0,
//         y: 0
//     },
//     methods: {
//         GetCursor: function (event) {
//             this.x = event.clientX;
//             this.y = event.clientY;
//         },
//         test: function (event) {
//             event.stopPropagation();
//         },
//         alert: function () {
//             alert('hello');
//         }
//     },
// });

// Computed
// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         result: '',
//         secondCounter: 0
//     },
//     methods: {
//         GetResult: function () {
//             console.log('GetResult');
//             return this.counter > 5 ? 'greater than 5' : 'less than 5';
//         }
//     },
//     computed: {
//         GetComputedResult: function () {
//             console.log('GetComputedResult');
//             return this.counter > 5 ? 'greater than 5' : 'less than 5';
//         }
//     },
// });

// Watch
// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         result: ''
//     },
//     computed: {
//         GetComputedResult: function () {
//             return this.counter > 5 ? 'greater than 5' : 'less than 5';
//         }
//     },
//     watch: {
//         counter: function (value) {
//             if (value > 10) {
//                 setInterval(() => {
//                     this.counter = 0;
//                 }, 3000);
//             }
//         }
//     }
// });

// Styling
// new Vue({
//     el: '#app',
//     data: {
//         color: 'red',
//         width: 150
//     },
//     computed: {
//         myStyle: function () {
//             return {
//                 backgroundColor: 'red',
//                 width: '150px'
//             };
//         }
//     }
// });

// Class
// new Vue({
//     el: '#app',
//     data: {
//         title: 'hello world to you',
//         attachRed: true,
//         className: ''
//     },
//     computed: {
//         Class1: function () {
//             return {
//                 red: this.attachRed,
//                 blue: !this.attachRed
//             };
//         }
//     },
// });

// Condition
new Vue({
    el: '#app',
    data: {
        show: false,
        test: false
    }
});