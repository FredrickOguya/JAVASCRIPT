let num = 40;
let str = ``;
while(num>0){
    str+=`${num%2}`
    num =Math.floor(num/2)
}

let ans = Number(str.split(``).reverse().join(``));

console.log(ans)