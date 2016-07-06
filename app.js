// Nothing here yet
console.log(1 + 1);


// Function takes in a function
// and returns nothing.
function myFunc(yourFunc) {
  return 'nothing';
}

console.log(myFunc(function() { console.log('yoman!'); }));
