module.exports = {
  sayHello: function(){
      return 'hello';
  },

  sayBye: function(){
    return 'bye';
  },

  addTwoNumber: function(valueA, valueB){
    return valueA + valueB;
  },

  factorial: function(number){
    let factorial = 1;
    if(number < 0){
      return undefined;
    }else if(number > 0 && typeof number === "number"){
      for(let i = number; i > 0; i--){
        factorial *= i;
      }
      return factorial;
    }
  }
}