import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct, addToCart } from "../redux/actions/productActions";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  let product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      const SELECTED_PRODUCTS = response.data;
      dispatch(selectedProduct(response.data));
      setLoading(false);
    });
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">Loading</div>
      </div>
    );
  }

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} alt={title} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <button className="ui primary button" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;