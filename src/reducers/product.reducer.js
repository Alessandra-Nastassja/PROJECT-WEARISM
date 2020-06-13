import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_SUCCESS, FETCH_BAG_SUCCESS } from '../actions/types';

const defaultState = {
    error: null,
    products: [],
    product: [],
    isLoading: false,
}   

const productReducer = (state = defaultState, action) => {     
    // Verifica qual ação ele deve tomar
    switch (action.type) {
        
        case FETCH_PRODUCTS_LOADING:
            return { ...state, isLoading: action.payload };

        case FETCH_PRODUCTS_SUCCESS:                
            return { ...state, products: action.payload };

        case FETCH_PRODUCTS_ERROR:
            return { ...state, error: action.payload };

        case FETCH_PRODUCT_SUCCESS:
            return {...state, product: action.payload}

        default:
            return state;
    }
}

export default productReducer;