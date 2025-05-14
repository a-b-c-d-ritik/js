const depricator=Object.getOwnPropertyDescriptors(Math,"PI")
console.log(depricator)

//changable
const chai={
    name:"ginger tea",
    price:34,
    isAvailable :true
}

console.log(Object.getOwnPropertyDescriptors(chai,"ginger tea"))

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptors(chai,"ginger tea"))


//iteration
for( let [key,value] of Object.entries(chai))
{
    if(typeof(value)!=='function')
        console.log(`${key}:${value}`)
}