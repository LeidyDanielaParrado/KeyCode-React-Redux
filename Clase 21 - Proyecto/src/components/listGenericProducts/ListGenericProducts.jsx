import React from "react";
import PropTypes from "prop-types";
import Card from "./components/Card";

const ListGenericProducts = ({ listProducts, filter }) => {
    const products = listProducts.filter((item) => item.category === filter);
    const elements = products.map((item, index) => <Card key={index} card={item} filter={filter} />);

    return (
        <section className="section-list">
            <article className="container-list">{elements}</article>
        </section>
    );
};

ListGenericProducts.propTypes = {
    listProducts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
};

export default ListGenericProducts;
