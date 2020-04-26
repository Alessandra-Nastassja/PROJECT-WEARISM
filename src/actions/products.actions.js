import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from './types';

import { getEnvironmentLocal } from '../utils/environment';

const endpoint = getEnvironmentLocal();

// Esta passando para o redux o data
export const fetchProductsLoading = (data) => {
    return {
        type: FETCH_PRODUCTS_LOADING,
        payload: data,
    }
}

export const fecthProductsSuccess = (data) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data,
    }
}

export const fetchProductsError = (data) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: data,
    }
}

export const fetchProducts = () => {
    let isLoading = true;

    return (dispatch) => {
        return fetch(`${endpoint}/produtos`)
        .then(res => res.json())
        .then(data => {                    
            isLoading = false;
            
            dispatch(fetchProductsLoading(isLoading))
            dispatch(fecthProductsSuccess(data))
        })
        .catch(error => {
            const errorPayload = {};

            errorPayload['message'] = error.res.data.message;
            errorPayload['status'] = error.res.status;

            isLoading = false;

            dispatch(fetchProductsLoading(isLoading))
            dispatch(fetchProductsError(error))
        })
    }
}