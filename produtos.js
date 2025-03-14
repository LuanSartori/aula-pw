// bom diaa

export const produtos = [
    {id: 1, nome: "Cebola", fornecedor: "Samara Alimentos Ltda.", preco: 17.99, estoque: 255},
    {id: 2, nome: "Alecrim Dourado", fornecedor: "Samara Alimentos Ltda.", preco: 17.99, estoque: 255},
    {id: 3, nome: "Papel Higiênico", fornecedor: "Samara Banheiros Ltda.", preco: 20.50, estoque: 86},
    {id: 4, nome: "Gorro do Papai Noel", fornecedor: "Polo Norte", preco: 1999.99, estoque: 1},
    {id: 5, nome: "Cenoura", fornecedor: "Samara Alimentos Ltda.", preco: 5.20, estoque: 48},
    {id: 6, nome: "Gergelim", fornecedor: "Samara Alimentos Ltda.", preco: 4.99, estoque: 90},
    {id: 7, nome: "Um .38", fornecedor: "Samara Itens Bélicos Ltda.", preco: 0.99, estoque: 0},
    {id: 8, nome: "Kit PC Gamer", fornecedor: "Carlos Eletrônicos", preco: 2399.90, estoque: 599},
    {id: 9, nome: "Danone", fornecedor: "Samara Alimentos Ltda.", preco: 7.99, estoque: 56},
    {id: 10, nome: "Molho de tomate", fornecedor: "Samara Alimentos Ltda.", preco: 12.99, estoque: 90},
]

export const obter_produtos = ( chave ) => produtos.map( (produto) => produto[chave] );
export const filtrar_produtos = ( chave, valor ) => produtos.filter( (produto) => produto[chave].toLowerCase().includes(valor.toLowerCase()) );
export const media_estoque = () => {
    const total = produtos.reduce( (total, produto) => total + produto.estoque, 0 );
    return total / produtos.length
};
