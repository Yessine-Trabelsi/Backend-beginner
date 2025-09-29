const {readFileSync,writeFileSync} = require("fs") ;
const first = readFileSync("./constent/first.txt" ) ;
const second = readFileSync("./constent/second.txt") ;

console.log(`First text = ${first}`) ;
console.log(`Second text = ${second}`) ;

writeFileSync(
    "./constent/result.txt" ,
    `This is the result: First text = ${first} , Second text = ${second}`
)
console.log("Task in process...") ;
console.log("Done🌈") ;