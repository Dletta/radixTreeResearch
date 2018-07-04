process.env.GUN_ENV = false
var Gun = require('gun')

var gun = Gun({
  localStorage: false,
  chunk: 1024
})
require('gun/lib/open.js')


var now = new Date()
now = now.getMilliseconds()

var app = gun.get('app').put({start: now})
var readArray = [];


function writeRand (start) {
  var key = "original" + t
  start = process.hrtime()
  app.get(key).put({name:"original",birthdate:"259870993",largerthan:"life",long:'property that is super long, so cut me off already'})
  readArray.push(key)
  t++
  l++
  if (l == 1) {
    l = 0
    var now = process.uptime()
    var diff = now - hr
    console.log(`write ${t}`);
    console.log(`at ${diff}`);
    hr = now
  }
  if(t >= 10){
    clear()
    t = 0
    console.dir(readArray)
    //readStart()
  }
}

/*
function readStart () {
  hr = process.uptime()
  start = process.hrtime()
  console.log(`starting reads ${process.hrtime()}`);
  timer = setInterval(randomRead, 5, start)

}
/*
function randomRead (start) {
  var key = readArray[t]
  start = process.hrtime()
  app.get(key).once((data)=>{console.log(data);console.log(`resolved ${process.hrtime(start)}`);})
  t++
  l++
  if (l == 1) {
    l = 0
    var now = process.uptime()
    var diff = now - hr
    console.log(`read ${t}`);
    console.log(`at ${diff}`);
    hr = now
  }
  if(t >= 10){
    clear()
    t = 0
    readWrite()
  }
}

function readWrite () {
  start = process.hrtime()
  console.log(`starting readwrite ${process.hrtime()}`);
  timer = setInterval(rWRandom, 500)
}

function rWRandom () {
  start = process.hrtime();
  var key = readArray[t]
  t++
  l++
  app.get(key).once((data, t, start)=>{/*console.log(`read1 ${t}`)})
  var key = readArray[readArray.length-1]
  start = process.hrtime()
  app.get(key).once((data,t, start)=>{/*console.log(`read2 ${t}`)})
  var key = 'original1';
  start = process.hrtime()
  app.get(key).once((data,t,start)=>{/*console.log(`read3 ${t}`)})
  var key = Gun.text.random()
  var temp = app.get(key).put({name:"new"})
  if (l == 1) {
    l = 0

  }
  if(t >= 10){
    clear()
    t = 0
    readWrite()
  }
}


var t = 0
var l = 0
var hr = process.uptime()
var start = process.hrtime()
console.log(`starting writes ${process.hrtime()}`);
var timer = setInterval(writeRand, 1, start)

function clear () {
  console.log(`ending after ${process.hrtime(start)}`);
  clearInterval(timer)
}
*/
app.get('test').put({name:"new",lang:"lldkdld dldkddkd dkdkd dkdkd dkdkdkdkd dkdkd dkd dkd"})
app.get('test2').put({name:"new"})
app.get('test3').put({name:"new"})
app.get('test4').put({name:"new",llarg:"dldkfaaf akflsdkfosdf sddf fs df sf sdfsgsh sdgf sdg d"})
app.get('test5').put({name:"new"})
app.get('test6').put({name:"new",lldld:"dadadada ad daad da ad ad da daadad  ad da "})
app.once((data)=>{console.log('app '+JSON.stringify(data))})
app.map().map().once((data,key)=>{console.log('app2 '+key+'  '+JSON.stringify(data))})
