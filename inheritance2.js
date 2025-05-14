class user{
    constructor(username,pass){
        this.username=username;
        this.pass=pass;
    }
    logme(){
       console.log(`${this.username} just logged in`) 
    }
}

class teacher extends user
{
    constructor(username,email,password){
        super(username,password);
        this.email=email;
    }

}

const c=new teacher('happy','gga@gmail.com',4164641321);
console.log(c)