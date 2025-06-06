function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {
    return "Hello, I am a named function!";
  }
  
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function")
  }
}