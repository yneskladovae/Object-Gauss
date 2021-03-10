'use strict'

function randnBM() { 
    let u = 0, v = 0; 
    while (u === 0) u = Math.random(); 
    while (v === 0) v = Math.random(); 
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0; 
}
  
function getObj(num = 9) {
    let obj = {};
    for (let i = 0; i <= num; i++) {
        let prop = randnBM();
        obj.hasOwnProperty(prop) ? obj[prop]++ : obj[prop] = 1;
    }
    for (let key in obj) {
        console.log(`| ${key} : ${obj[key]} |`);
    } 
    console.log(obj);
}

getObj();