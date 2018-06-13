var Gun = require('gun')
var gun = Gun({
  radisk: false,
  until: 1
})

var now = new Date()
now = now.getMilliseconds()

var app = gun.get('app').put({start: now})

var writeRand = function() {
  app.get(Gun.text.random()).put({name:"name"})
}

let i = 10

while(i>=0){
  writeRand()
  i--
}
