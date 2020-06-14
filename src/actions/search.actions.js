import { FETCH_SEARCH_SUCCESS } from './types';

export const fecthSearchSuccess = (data) => {
    return {
        type: FETCH_SEARCH_SUCCESS,
        payload: data,
    }
}

export const fecthSearch = (type) => {
    return (dispatch) => {
        dispatch(fecthSearchSuccess(type))
    }
}