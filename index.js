var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  let kitkat = kittens.pop();
  return kittens;
}

function destructivelyRemoveFirseKitten(){
  let kitkat = kittens.shift();
  return kittens;
}

function appendKitten(name){
  
}

function prependKitten(name){
  
}

function removeLastKitten(){
  
}

function removeFirstKitten(){
  
}