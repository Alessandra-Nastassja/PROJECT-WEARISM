import { FETCH_PRODUCT_SUCCESS, FETCH_BAG_SUCCESS } from './types';

import { getEnvironmentLocal } from '../utils/environment';

const endpoint = getEnvironmentLocal();

export const fetchProductSuccess = (data) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const fetchBagSucess = (data) => {
    return {
        type: FETCH_BAG_SUCCESS,
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

export const fetchBag = (data) => {

    var listaCarrinho = JSON.parse(localStorage.getItem("state"));

    if (listaCarrinho != null) {
        if (data.length !== 0) {
            console.log('aaa');

            let list = [];
            
            list = [...listaCarrinho, data]            

            localStorage.setItem('state', JSON.stringify(list));
        }

    } else {
        console.log('bbb');
        if (data.length !== 0) {
            console.log('ccc');
            
            localStorage.setItem('state', JSON.stringify(data));
        }

        console.log('ddd');
        
    }

    return (dispatch) => {
        // dispatch(fetchBagSucess(data))
    }
}