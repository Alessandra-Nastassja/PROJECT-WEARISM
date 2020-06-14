import { GET_BAG_SUCCESS } from '../actions/types';

const defaultState = {
    error: null,
    shoppingBag: [],
    isLoading: false,
}  

const bagReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_BAG_SUCCESS:
            return {...state, shoppingBag: action.payload}
    
        default:
            return state;
    }
}

export default bagReducer;