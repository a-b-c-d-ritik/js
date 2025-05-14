class user{
constructor(email,pass){
this.email=email,
this.pass=pass
}
get pass(){
    return this._pass.toUpperCase();
}

set pass(value){
    //this.pass=value// cant set something twice :"Maximum call stack size exceeded" error 
    //soluion : create new variables
    this._pass=value
}

}


const v1 = new user('gdgj@gaam.com',268726)

v1._pass(123);