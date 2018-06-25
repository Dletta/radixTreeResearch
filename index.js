process.env.GUN_ENV = false
var Gun = require('gun')

var gun = Gun({
  localStorage: false
})


var now = new Date()
now = now.getMilliseconds()

var app = gun.get('app').put({start: now})

var writeRand = function(timer, hr) {
  app.get(Gun.text.random()).put({name:"name"})
  t++
  l++
  if (l == 1000) {
    l = 0
    console.log(process.uptime());
    console.log(t);
    var now = process.uptime()
    var diff = now - hr
    console.log(`at ${diff}`);
    hr = now
  }
  if(t>=1000000){
    clearInterval(timer)
  }
}

var t = 0
var l = 0
var hr = process.uptime()

console.log(`starting writes ${process.hrtime()}`);
var timer = setInterval(writeRand, 1, timer, hr)
console.log(`ending writes ${process.hrtime()}`);
