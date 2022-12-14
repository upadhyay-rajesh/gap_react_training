const initialState=[];
function productReducer(product=initialState,action){

    const {type,payload}=action;

    switch(type){
        case 'displayAllProduct':
            return payload;
    }
    switch(type){
        case 'addProduct':
            return [...product,payload];
    }
    switch(type){
        case 'editProduct':
            return product.map((pp)=>{
                if(pp.id===payload.id){
                    return {
                        ...pp,...payload
                    };
                }
                else{
                    return pp;
                }
            })
     
    }
    switch(type){
        case 'deleteProduct':
            return product.filter(({id})=> id !== payload.id);
    }
    switch(type){
        case 'viewProduct':
            return payload;
    }

}
export default productReducer;