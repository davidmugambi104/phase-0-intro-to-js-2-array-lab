// Write your solution here!
const cats =[
   "Milo", "Otis", "Garfield"]

 function destructivelyAppendCat(name) {
cats.push(name);
 }
 function destructivelyPrependCat(name) {
   cats.unshift(name); }
 
 function destructivelyRemoveLastCat() {
   cats.pop()
 }
 function destructivelyRemoveFirstCat() {
   cats.shift()
 }

 function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function to remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function to append a cat to the cats array and return a new array
function appendCat(name) {
    let newCats = cats.concat(name);
    return newCats;
}

// Function to prepend a cat to the cats array and return a new array
function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
}

// Function to remove the last cat in the cats array and return a new array
function removeLastCat() {
    let newCats = cats.slice(0, -1);
    return newCats;
}

// Function to remove the first cat from the cats array and return a new array
function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats; }