import { FETCH_BAG_SUCCESS, GET_BAG_SUCCESS } from './types';

export const fetchBagSucess = (data) => {
    return {
        type: FETCH_BAG_SUCCESS,
        payload: data,
    }
}

export const getBagSuccess = (data) => {
    return {
        type: GET_BAG_SUCCESS,
        payload: data,
    }
}
export const fetchBag = (data) => {    
    return (dispatch) => {
        var listaCarrinho = JSON.parse(localStorage.getItem("state"));

        if (listaCarrinho != null & data.length !== 0) {
            var list = Object.assign({}, data, listaCarrinho);

            localStorage.setItem('state', JSON.stringify(list));

            dispatch(fetchBagSucess(list))            

        } if (listaCarrinho == null) {
            localStorage.setItem('state', JSON.stringify([]));
        }
    }
}

export const getBag = () => {
    return (dispatch) => {
        let items = JSON.parse(localStorage.getItem("state"));

        dispatch(getBagSuccess(items))
    }
}