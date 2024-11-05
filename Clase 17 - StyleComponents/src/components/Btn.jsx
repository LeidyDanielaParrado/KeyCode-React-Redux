import styled from "styled-components";

const StyleBtn = styled.button`
    background-color: ${(props) => props.color || "blue"};
    color: white;
`;

const Btn = ({ color, handleButton }) => {
    const handleClick = () => {
        console.log("Se dio click");

        handleButton();
    };

    return (
        <StyleBtn color={color} onClick={handleClick}>
            Like
        </StyleBtn>
    );
};

export default Btn;
