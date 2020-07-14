const reducer = (state={isLogged:false},action) =>{
    switch(action.type){
        case 'GET_USER':
            return Object.assign({},state);
        case 'SET_USER':
            state = action.payload;
            return Object.assign({},state);
    }
}
export default reducer;