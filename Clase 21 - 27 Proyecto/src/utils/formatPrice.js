export const formatPrice = (price) => {
    const format = price.toLocaleString("es-CO", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return `$ ${format} COP`;
};
