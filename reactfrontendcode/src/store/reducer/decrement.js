function counterdecrement(value=0,action){
    switch (action.type) {
      
      case 'decrement':
          return value-1 
    
      default:
        return value;
    }
  }

  export default counterdecrement;