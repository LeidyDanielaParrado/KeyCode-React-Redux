const columns = [
    { name: "NOMBRE", uid: "title" },
    { name: "CATEGORÍA", uid: "category" },
    { name: "PRECIO", uid: "price" },
    { name: "CANTIDAD", uid: "price" },
    { name: "ACCIONES", uid: "actions" },
];

const products = [
    {
        id: 1,
        title: "Orange",
        category: "object",
        img: "objeto1.jpg",
        description: "Orange is a fruit.",
        price: "$5.50",
    },
    {
        id: 2,
        title: "Orange",
        category: "object",
        img: "objeto2.jpg",
        description: "Orange is a fruit.",
        price: "$5.50",
    },
    {
        id: 3,
        title: "Orange",
        category: "object",
        img: "objeto3.jpg",
        description: "Orange is a fruit.",
        price: "$5.50",
    },
];

export { columns, products };
