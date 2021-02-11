// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver (name) {
    drivers.push(name);
}
function destructivelyPrependDriver (name) {
    drivers.unshift(name);
}
function destructivelyRemoveDriver (name) {
    drivers.pop(name);
}
function destructivelyRemoveLastDriver () {
    drivers.pop();
}
function destructivelyRemoveFirstDriver () {
    drivers.shift();
}
function appendDriver(name){
    return [...drivers, name];
}
function prependDriver(name){
    return [name,...drivers ];
}
function removeLastDriver(){
    return drivers.slice(0, drivers.length - 1);
}
function removeFirstDriver(){
    return drivers.slice(1);
}
// Why doesnt 0 apply here?