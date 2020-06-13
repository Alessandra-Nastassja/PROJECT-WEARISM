import { FETCH_BAG_SUCCESS, GET_BAG_SUCCESS } from '../actions/types';

const defaultState = {
    error: null,
    bag: [],
    shoppingBag: [],
    isLoading: false,
}  

const bagReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_BAG_SUCCESS:
            return {...state, bag: action.payload}

        case GET_BAG_SUCCESS:
            return {...state, shoppingBag: action.payload}
    
        default:
            return state;
    }
}

export default bagReducer;