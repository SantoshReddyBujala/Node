//Node Js

console.log("Hello World");
//console.log(global);

const os = require("os");
const path = require('path');
//const math = require('./math');
const {add, sub, mul, div} = require('./math');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(os.platform());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename))

//console.log(math.add(3,6));

console.log(add(3,6));
console.log(mul(3,6));
console.log(sub(3,6));
console.log(div(3,6));
console.log('Testing');