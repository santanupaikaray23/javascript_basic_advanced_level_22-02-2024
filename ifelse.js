if (condition){
    // do something
}else{
    // do comething
}

var a = 45342
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var a = 34557
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var name = "Santanu";
if(name=="Sidhanta"){
    console.log(`Hi ${name} You are admin`)
}else if(name=="Sipun"){
    console.log(`Hi ${name} You are super admin`)
}else{
    console.log(`Hi ${name} I don't know you`)
}

var role = "Admin"
var name = "Santanu"
if(role =="Admin"){
    if(name=="Sidhanta"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknow`)
    }
}

// any condition can match

var name = "Santanu"
if(name=="Santanu" || name=="Chinu"){
    console.log(`hi ${name} you are welcome`)
}

//both condition should match

var name = "Sipun"
if(name=="Tina" && role=="Admin"){
    console.log(`hi ${name} you are ${role}`)
}else{
    console.log(`Bye ${name} you are not admin`)
}

var name = "Santanu"
if(name=="Santanu" &&(role=="Admin" || role=="User")){
    console.log(`hi ${name} you are ${role}`)
}

var a = 1
if(a){
    console.log('hi')
}else{
    console.log("Bie")
}

var a = 0
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}

var a = -1
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}

/////
// Ternary> single line if else condition
//////////
var a = 10
a>10?"hii":"Bie"
"Bie"

var a = 10
a==10?"hii":"Bie"
