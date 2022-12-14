function counter(value=0,action){
    switch (action.type) {
      case 'increment':
        return value+1
      case 'decrement':
          return value-1 
    
      default:
        return value;
    }
  }

  export default counter;