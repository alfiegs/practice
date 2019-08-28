var n = 5
var ar = [1,2,1,2,3]

var color1 = 0
var color2 = 0
var color3 = 0

var pairs = 0

ar.forEach((item)=>{
    if (item == 1){
        color1++
    }
    if (item == 2) {
        color2++
    }
    if (item == 3) {
        color3++
    }
})

if (color1 % 2 == 0)

console.log(color1, color2, color3)