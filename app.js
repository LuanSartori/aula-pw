import { filtrar_produtos, obter_produtos, media_estoque } from "./produtos.js";

console.log("Bem Vindo ao André Mercados!")

console.log("Obtendo apenas a coluna \"nome\"");
console.log(obter_produtos('nome'));

console.log("Filtro de pesquisa");
console.log(filtrar_produtos('fornecedor', 'Samara'));

console.log("Obtendo a média dos valores do est");
console.log(media_estoque());
