import PropTypes from "prop-types";

import { Card as CardNextUi, CardBody, CardFooter, Image } from "@nextui-org/react";

import { formatPrice } from "../../../utils/formatPrice";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const img = new URL(`../../../assets/${card.category}/${card.img}`, import.meta.url).href;

    return (
        <Link to={`/store/detail?id=${card.id}`}>
            {/* <Link to={`/store/detail/${card.id}`}> */}
            <CardNextUi shadow="sm" isPressable>
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
                    <p className="text-default-500">{formatPrice(card.price)}</p>
                </CardFooter>
            </CardNextUi>
        </Link>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
};

export default Card;
