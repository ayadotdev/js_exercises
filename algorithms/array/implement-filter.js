

Array.prototype.newayafunction = function (func) {
    let arrFiltered = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i],i,this)) arrFiltered.push(this[i]);
  }
return arrFiltered;
}



console.log([1,2,3].newayafunction(e => e < 3));






// This filter function return an array with values that meet 
// the conditions set in the ruleCondition callback function.

Array.prototype.filter = function( ruleCondition ) {
    // Create an empty array to store the values that satisfy the ruleCondition
      var arr = [];
      
      this.forEach( function( currentValue ) {
      // Evaluate each element and push the value when content in array meet condition
        if( ruleCondition( currentValue ) ) arr.push( currentValue );
      });
      return arr;
    }