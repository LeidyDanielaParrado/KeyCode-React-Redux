import React from "react";
import PropTypes from "prop-types";
import Card from "./components/Card";

import "./listProducts.scss"

const ListProducts = ({ listProducts, filter }) => {
    const products = filter ? listProducts.filter((item) => item.category === filter) : listProducts;
    const elements = products.map((item, index) => <Card key={index} card={item} />);

    return (
        <section className="section-list">
            <article className="container-list">{elements}</article>
        </section>
    );
};

ListProducts.propTypes = {
    listProducts: PropTypes.array.isRequired,
    filter: PropTypes.string,
};

export default ListProducts;
