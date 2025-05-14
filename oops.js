const user={
    username:"ritik",
    age:24,
    email:"ertw@gmail.com",

    getusername:()=>{
        console.log(this.username)
    }
}

console.log(user)
console.log(user.email,user.username)
console.log(user.getusername())

function userc(username,logincount,isloggedin){
    this.username=username
    this.logincount=logincount
    this.isloggedin=isloggedin

    return this;
}

const us1= new userc("tatyavichhu",254,true);
console.log(us1)
const us2= new userc("annabell",24,false);
console.log(us2)
