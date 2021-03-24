'use strict'

const table = document.querySelector('.content').innerHTML = `<table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse" class = "table"></table>`;

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
        let row = document.createElement('tr');
        row.innerHTML = `<td>${key}</td><td>${obj[key]}</td>`;
        document.querySelector('.table').appendChild(row);

    }
}

getObj();