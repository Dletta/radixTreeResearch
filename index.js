var Gun = require('gun')
var gun = Gun({
  localStorage: false,
  file: './radata/',
  until: 1
})

var now = new Date()
now = now.getMilliseconds()

var app = gun.get('app').put({start: now})

var writeRand = function() {
  app.get(Gun.text.random()).put({name:"name"})
}

setInterval(writeRand, 1)
