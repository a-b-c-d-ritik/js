class user{
    constructor(username,email,pass){
        this.username=username;
        this.email=email;
        this.pass=pass;
    }

    encrypt(){
        return `${this.pass}rtk`
    }
}

const v1=new user("hekkl","hajh@gmail.com",6326454)
console.log(v1.encrypt())