var app = new Vue({
  el: '#app',
  data: {
    greet: 'Hello,ninjacode!'
  },
  methods: {
    reverseText: function() {
      this.greet = this.greet.split("").reverse().join("");
    }
  }
});

// No.09
// var app = new Vue({
//   el: '#app',
//   data: {
//     greet: 'Hello,ninjacode!'
//   },
//   methods: {
//     reverseText: function() {
//       this.greet = this.greet.split("").reverse().join("");
//     }
//   }
// });

// No.07
// var app = new Vue({
//   el: '#app',
//   methods: {
//     alertText: function() {
//       alert("I'm Ninja!!")
//     }
//   }
// });

// No.06
// var app = new Vue({
//   el: '#app',
//   data: {
//     random: 'fun'
//     // random: 'lazy'
//   }
// });

// No.04
// var app = new Vue({
//   el: '#app',
//   data: {
//     show: true
//   }
// });

// No.03
// var app = new Vue({
//   el: '#app',
//   data: {
//     isActive: true
//   }
// });