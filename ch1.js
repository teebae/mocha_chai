const number_game = (x, y) => {
  //   Code here
    let greatest; 
    let smallest;
    let allValues = [];
    let result = [];
    
    //this code check the greatest and smallest value between x and y 
    if( x > y ){
      greatest = x;
      smallest = y;
    }else if( x < y ){
      greatest = y;
      smallest = x;
    }
    
     //this generate the all the available value(s) between smallest and greatest value(s)
    for( let i = smallest; i <= greatest; i++ ){
      allValues.push(i); 
    }
  
  
    if (x > y) {
      for( let j = 1; j < allValues.length; j++ ){
         //this to check if the values are even number
        if(allValues[j] % 2 === 0){
          result.push(allValues[j]);
        }
      }
      return result;   
    } 
    for( let k = 1; k < allValues.length; k++ ){
       //this to check if the values are odd number
      if(allValues[k] % 2 !== 0){
        result.push(allValues[k]);
      }
    }
    return result;  
     exit(1);
  }    
   
  console.log(number_game(2, 12));
  //console.log(number_game(10, 2));