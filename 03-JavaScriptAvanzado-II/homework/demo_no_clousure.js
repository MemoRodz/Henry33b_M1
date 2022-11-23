

// const no_clousure = function(){
//     var count = 0
//     count++
//     return count
// }
// console.log(no_clousure())
// console.log(no_clousure())




const no_clousure = function(){
    var count = 0
    count++
    return count
}
console.log(no_clousure())
console.log(no_clousure())
const inst_no_clou = no_clousure
console.log(inst_no_clou())