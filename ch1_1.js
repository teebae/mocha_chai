const number_game = (x, y) => {
  //   Code here
   
    let result = [];
  
    if (x > y) {
      for (i=y+1; i<x; i++) {
        if (i%2 == 0) {
          result.push(i);
        }
      }
    } else {
      for (i=x+1; i<y; i++) {
        if (i%2 != 0) {
          result.push(i);
        }
      }
    }
   
    return result;  
     exit(1);
  }    
   
  console.log(number_game(2, 12));