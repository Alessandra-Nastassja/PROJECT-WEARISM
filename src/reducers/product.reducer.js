import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from '../actions/types';

const defaultState = {
    error: null,
    products: [],
    isLoading: false,
}

const produtcReducer = (state = defaultState, action) => {
    switch (action.type) {
        
        case FETCH_PRODUCTS_LOADING:
            return { ...state, products: action.payload };

        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, isLoading: action.payload };

        case FETCH_PRODUCTS_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;
    }
}

export default produtcReducer;