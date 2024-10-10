import React from "react";
import PropTypes from "prop-types";

import { Card as CardNextUi, CardBody, CardFooter, Image } from "@nextui-org/react";

const Card = ({ card, filter }) => {
    const img = new URL(`../../../assets/${filter}/${card.img}`, import.meta.url).href;

    return (
        <CardNextUi shadow="sm" isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={card.title}
                    className="w-full object-cover h-[140px]"
                    src={img}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{card.title}</b>
                <p className="text-default-500">{card.price}</p>
            </CardFooter>
        </CardNextUi>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
};

export default Card;
