import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();


    const fetchProducts = () => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            const SET_PRODUCTS = response.data;
            dispatch(setProducts(response.data));
        });
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );

};

export default ProductListing;