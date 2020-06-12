let fs = require("fs");
console.log("Before");

let readFilePromise = fs.promises.readFile("f2.txt");
readFilePromise.then(function(data){
    console.log("inside then");
    console.log("Content"+ data);
})
readFilePromise.catch(function(err){
    console.log("inside catch");
    console.log(err);
})
console.log("After");