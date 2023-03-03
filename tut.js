// Functions export
export default function DoSomething() {
  
}
export const DoSomething =()=>{

}
const MyComponent = ()=>{
  return<div></div>
}
<button onClick={()=>{
  console.log("hello world");
}}>

</button>
if (true) {
  
}else{

}
let age =10;
let name = "Pedro"

if (age > 10) {
  name = "Pedro"
}else {
  name ="Jack"
}
let age1 = 16;
let name1 = age1 > 10 && "Pedro"
let age2 = 16;
let name2 = age2 >10 || "Pedro"
let age3 = 16;
let name3= age3 > 10 ? "Pedro" : "Jack";
let age4 = 16;
let name4= age3 > 10 ? "Pedro" : "Jack";
const Component =()=>{
  return age4 > 10 ? <div>Pedro</div>:<div>Jack</div>
}

// Objects

const person ={
  name: "pedro",
  age: "20",
  isMarried: false,
};
 const name = person.name
 const age = person.age
const isMarried = person.isMarried
// 
const person1 ={
  name: "pedro",
  age: "20",
  isMarried: false,
};
const {name, age, isMarried} =person1
// 

const name = "Pedro"

const person2 ={
  name: name,
  age: "20",
  isMarried: false,
}
// 

const name = "Pedro"
const age = 20;

const person = {
  name,
  age,
  isMarried: false,
}
// 
const person ={
  name: "Pedro",
  age: 20,
  isMarried: false,
}
 const person2 = {...person, name: "Jack"}
//  
const person ={
  name: "Pedro",
  age: 20,
  isMarried: false
}
const person2 ={...person, name: "Jeck"};
const names =["Pedro", "Jack", "Jessica"];
const names1 =[...names, "Joel"]

// Map filter reduce
let names2 = ["Pedro","Jessico", "Carol"];
names2.map((name)=>{
  return name ="1"
})
let names5 = [, "Jessica", "Carol", "Pedro", "Pedro"];
names5.filter((name)=>{
  return name !=="Pedro"
})



