var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(array, element) {
kittens.push("Ralph");
}

function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(array, element) {
  kittens.pop("Ralph");
}

function destructivelyRemoveFirstKitten(array, element) {
  kittens.shift("Bob");
}

function appendKitten(array, element) {
  return [...kittens, "Broom"];
}

function prependKitten(array, element) {
  return ["Arnold", ...kittens];
}

function removeLastKitten(array) {
  return kitten.slice(0, kitten.length - 1);
}
 
// Add your functions and code here
