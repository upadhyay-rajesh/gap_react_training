function counterincrement(value=0,action){
    switch (action.type) {
      case 'increment':
        return value+1
     
      default:
        return value;
    }
  }

  export default counterincrement;