import { FETCH_SEARCH_SUCCESS } from '../actions/types';

const defaultState = {
    search: [],
}  

const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_SUCCESS:
            return {...state, search: action.payload}
    
        default:
            return state;
    }
}

export default searchReducer;