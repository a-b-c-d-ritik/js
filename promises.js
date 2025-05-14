const promOne=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async1 task is complete")
        resolve();
    },1000)
})

promOne.then(()=>{
    console.log("process completed")
})

//type 2 wihout variable

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async2 task is complete")
        resolve();
    },1000)
}).then(()=>{
    console.log("async2 work done");
})

//paramaterized promise

const prom3=new Promise(function(resolve,reject){
setTimeout(()=>{
    resolve({user:"ritik",email:"ritikec48@gmail.com"})
},1000)
})

prom3.then((user)=>{
console.log(user);
})

const prom4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let ed=true;
        if(!ed){
            resolve({username:"ritik",password:"627787"});}
        else{
        reject("error something went wrong!");}
    },1000)
})

prom4.then((user)=>{
   console.log(user)
   return user.username;
}).then((username)=>{
console.log(username)
}).catch((err)=>{
    console.log(err);
})
/*.finally(()=>{
    console.log("finally executed")
})*/


//async await(substitute of then,catch ,finally)

const prom5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let ed=true;
        if(!ed){
            resolve({username:"ritik",password:"627787"});}
        else{
        reject("error something went wrong!");}
    },1000)
})


async function consumer(){
    try {
      const response=await prom5;
      console.log(response)  
    } 
    catch (error) {
        console.log(error)
    }
}

consumer();

async function getsomeusers() {
    try{
  const respo=await fetch('https://randomuser.me/api/')
  const data=await respo.json()
  console.log(data)
    }
    catch(e){
        console.log(e)
    }
}

getsomeusers();

//more fetch

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(e)
})