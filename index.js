// Write your solution here!
const cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat(){
    console.log(cats); 
    console.log(cats.push("Ralph"));
}
function destructivelyPrependCat(){
    console.log(cats.unshift("Bob"));
}
function destructivelyRemoveLastCat(){
    console.log(cats.pop("Garfield"));
}
function destructivelyRemoveFirstCat(){
    console.log(cats.shift("Milo"));
}
function appendCat(Broom){
    return [...cats, Broom]; 
}
function prependCat(Arnold){
    return [Arnold, ...cats];
}
function removeLastCat(){
   return cats.slice(0,-1)
}
function removeFirstCat(){
   return cats.slice(1)
}