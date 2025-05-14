function setusername(username){
    this.username=username;
    console.log("username is setted")
}

function createuser(username,email,pass){
    setusername.call(username)
    setusername.call(this,username)//passes its own this to setusername
    this.email=email,
    this.pass=pass
}

const u1=new createuser("ritik","abc@gmail.com",45461231)
console.log(u1)