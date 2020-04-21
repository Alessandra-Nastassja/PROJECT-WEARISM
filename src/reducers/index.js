import { combineReducers } from "redux";
import products from './product.reducer';

export default combineReducers({
    productsData: products,
})