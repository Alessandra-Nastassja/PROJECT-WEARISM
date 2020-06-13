import { combineReducers } from "redux";

import productReducer from './product.reducer';
import bagReducer from './bag.reducer';

export default combineReducers({
    productsData: productReducer,
    bagData: bagReducer
})