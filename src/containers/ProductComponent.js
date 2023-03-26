import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui card" style={{ height: "100%" }}>
                        <div className="image">
                            <img src={image} alt={title} style={{ height: "350px"}} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta">
                                <span className="price">$ {price}</span>
                            </div>
                            <div className="description">{category}</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default ProductComponent;
