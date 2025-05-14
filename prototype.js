function multiby5(num)
{
    return num*5
}
multiby5.power=2
console.log(multiby5(25))
console.log(multiby5.power)
console.log(multiby5.prototype)


const name1='hitesh'
const name2='hitesh           '

/*function truelength(){
    return (this.trim().length)
}*/

//console.log(name1.truelength)
String.prototype.truelength=()=>{
    return (this.trim().length)
}
name1.truelength()
//console.log()
//"hitesh    ".truelength();