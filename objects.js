const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}

const ob3={ob1,ob2}
//console.log(ob3)

const ob4=Object.assign(ob1,ob2)
console.log(ob4)

const ob5={...ob1,...ob2}
console.log(ob5)