
const path = require('path');
console.log(path.join('hello.txt'))
console.log(path.basename(__filename))
console.log(path.parse(__filename));
console.log(path.parse(__dirname));
console.log(path)
console.log(path.format(path.parse(__filename)));
console.log(path.isAbsolute(__filename))
console.log(path.extname(__filename))
console.log(path.dirname(__filename))
console.log(path.normalize(__filename))