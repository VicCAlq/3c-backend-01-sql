/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando 
  * para selecionar na tabela cliente todos os clientes 
  * que moram em Jaboatão e Olinda
  */
export const r1 = `SELECT * FROM clientes WHERE cidade in ('Jaboatão dos Guararapes', 'Olinda');`

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando 
  * para ordenar a tabela de produtos a partir do preço 
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 = `SELECT * FROM produtos ORDER BY preco DESC;`

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os meses de Outubro (10)
  * e Novembro (11)
  */
export const r3 = `SELECT * FROM pedidos WHERE data_pedido BETWEEN '2025-12-12' AND '2025-12-18';`

/* Exercício 1:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de pedidos
  */
export const r4 = `
SELECT p2.id, p2.nome, p2.vendedor, p2.descricao, p2.preco, ip.quantidade , p2.categoria
FROM itens_pedido ip 
INNER JOIN produtos p2 ON ip.produto_id  = p2.id;
`

