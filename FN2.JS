const user={
    name:"ritik",
    age: 24,
    welcomemsg : function(){
        console.log(`${this.name},welcome`);
        console.log(this);
    }
}

user.welcomemsg() 
console.log(this); 


