const teacher ={
    makevideo:true
}

const teachingsupport={
    isavailable:true
}
const TA={
    makeassignment:'js assignment',
    fulltime:true,
    __proto__:teachingsupport
}
console.log(TA.isavailable)


//modern syntax of prototype
Object.setPrototypeOf(TA,teacher)
console.log(TA.makevideo)