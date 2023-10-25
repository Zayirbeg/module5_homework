let arrMain = [0, 3, 4, 6, 0, 12];
let zero = 0
let even = 0
let odd = 0

for (let i = 0; i < arrMain.length; i += 1){
  if (typeof arrMain[i] === 'number' ){
    if (arrMain[i] === 0) {
      zero += 1
    } else if (arrMain[i] % 2 === 0){
      even += 1
    } else {
      odd += 1
    }
  }
}

console.log ('В массиве: ' + zero + ' - нулей, ' + even + ' - четных, ' + odd + ' - нечетных')