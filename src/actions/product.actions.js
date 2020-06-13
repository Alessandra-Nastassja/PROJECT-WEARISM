import { FETCH_PRODUCT_SUCCESS } from './types';

import { getEnvironmentLocal } from '../utils/environment';

const endpoint = getEnvironmentLocal();

export const fetchProductSuccess = (data) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const fetchProduct = (id) => {
    return (dispatch) => {
        return fetch(`${endpoint}/produtos/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchProductSuccess(data));
            })
    }
}