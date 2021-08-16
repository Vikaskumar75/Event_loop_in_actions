const fs = require('fs');

setTimeout(() =>   console.log("Timer 1 finished") , 0);
setTimeout(() =>   console.log('Timer 2 finished') , 3000);

setImmediate(()=>console.log('Immediate 1 is finished'));

fs.readFile('test-file.txt', () => {
    console.log('fileRead')
    setTimeout(() =>   console.log('Timer 3 finished') , 0);
setTimeout(() =>   console.log('Timer 4 finished') , 3000);

setImmediate(()=>console.log('Immediate 2 is finished'));
});

console.log('this is top level code');
