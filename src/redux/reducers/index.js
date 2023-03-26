import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, cartReducer } from "./productReducer";



const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
});


export default reducers;