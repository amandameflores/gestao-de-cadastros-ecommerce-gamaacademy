import IProduct from "../models/product";

const products:IProduct[] = [{
    
    id: 1,
    name: "fogão",
    description: "fogão quatro bocas",
    photo: "fogao.webp",
    price: 1552.17

}, {
    id: 2,
    name: "freezer",
    description: "esse gela mais que você",
    photo: "freezer.webp",
    price: 1580.07

}, {
    id: 3,
    name: "geladeira",
    description: "com refrigerador embutido",
    photo: "geladeira.webp",
    price: 1719.57

}, {
    id: 4,
    name: "lava louças",
    description: "aqui a mão não cai",
    photo: "lavaloucas.webp",
    price: 1919.00
 
}, {
    id: 5,
    name: "lavadora",
    description: "lavar na mão nunca mais",
    photo: "lavadora.webp",
    price: 1549.99

}, {
    id: 6,
    name: "microondas",
    description: "vários mac'n'cheese",
    photo: "microondas.webp",
    price: 469.00
}]

export default products;