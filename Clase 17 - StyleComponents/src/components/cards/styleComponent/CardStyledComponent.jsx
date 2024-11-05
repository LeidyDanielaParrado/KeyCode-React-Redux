import styled from "styled-components";
import Btn from "../../Btn";

const pixel = 300;

// Estilos para la card
const StyleCard = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: ${pixel}px;

    background-color: rgb(56, 56, 56);
    border-radius: 15px;
`;

// Estilos para el div
const StyleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

// Estilos para la imagen
const StyleFigure = styled.figure`
    width: 100%;
    padding: 20px;
`;

// Estilos para la imagen
const StyleImg = styled.img`
    width: 100%;
    border-radius: 10px;
`;

// Estilos para el título
const StyleTitle = styled.h3`
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(6, 142, 226);
`;

const CardStyledComponent = () => {
    const handleButtonBlue = () => {
        console.log("Se dio click en el boton azul");
    };

    const handleButtonGreen = () => {
        console.log("Se dio click en el boton verde");
    };

    return (
        <StyleCard>
            <h2>Card Styled Component</h2>
            <StyleDiv>
                <StyleFigure>
                    <StyleImg
                        src="https://img.freepik.com/vector-gratis/personaje-dibujos-animados-gatito-ojos-dulces_1308-135596.jpg"
                        alt="Animals"
                    />
                </StyleFigure>

                <StyleTitle>Animals</StyleTitle>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptates.</p>

                <Btn color="green" handleButton={handleButtonBlue} />
                <Btn color="blue" handleButton={handleButtonGreen} />
            </StyleDiv>
        </StyleCard>
    );
};

export default CardStyledComponent;
