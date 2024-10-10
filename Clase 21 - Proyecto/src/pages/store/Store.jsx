import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Store = () => {
    const products = [
        {
            title: "Orange",
            category: "product",
            img: "/images/fruit-1.jpeg",
            description: "Orange is a fruit.",
            price: "$5.50",
        },
        {
            title: "Orange",
            category: "product",
            img: "/images/fruit-1.jpeg",
            description: "Orange is a fruit.",
            price: "$5.50",
        },
        {
            title: "Orange",
            category: "food",
            img: "/images/fruit-1.jpeg",
            description: "Orange is a fruit.",
            price: "$5.50",
        },
        {
            title: "Orange",
            category: "food",
            img: "/images/fruit-1.jpeg",
            description: "Orange is a fruit.",
            price: "$5.50",
        },
        {
            title: "Orange",
            category: "food",
            img: "/images/fruit-1.jpeg",
            description: "Orange is a fruit.",
            price: "$5.50",
        },
        {
            title: "Orange",
            category: "location",
            img: "/images/fruit-1.jpeg",
            description: "Orange is a fruit.",
            price: "$5.50",
        },
    ];

    const productsFood = products.filter((item) => item.category === "food");
    const productsObject = products.filter((item) => item.category === "product");
    const productsLocation = products.filter((item) => item.category === "location");

    const elementsProducts = products.map((item, index) => {
        return (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={item.title}
                        className="w-full object-cover h-[140px]"
                        src={item.img}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>{item.title}</b>
                    <p className="text-default-500">{item.price}</p>
                </CardFooter>
            </Card>
        );
    });

    return (
        <section className="section-list">
            <article className="container-list">{elementsProducts}</article>
        </section>
    );
};

Store.propTypes = {};

export default Store;
