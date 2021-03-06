

let foo = 10 + '20'; //1020

console.log(0.1 + 0.2 == 0.3);//false ??

console.log("i'm a lasagna hog".split("").reverse().join(""));//goh angasal a m'i

( window.foo || ( window.foo = "bar" )); //??



var foo = "Hello";
(function() {
  var bar = " World";
  console.log(foo + bar);
})();
console.log(foo + bar);


var foo = [];
foo.push(1);
foo.push(2);
console.log(foo.length); //2

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
});
console.log('four');// one four three two

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined')); //false
console.log("b defined? " + (typeof b !== 'undefined')); //true

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return 
  {
      bar: "hello"
  };
}

console.log(foo1());//{ bar: 'hello'}
console.log(foo2());//undefined ??







let arr1 = [0,1,2,3];
let arr2 = [0,1,2,3];

arr1 = arr2;

arr1.shift();
arr2.pop();

console.log(arr1);//??
console.log(arr1);//??