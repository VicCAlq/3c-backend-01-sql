/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando 
  * para selecionar na tabela cliente todos os clientes 
  * que moram em Jaboatão e Olinda
  */
export const r1 = `select * from clientes where in ('recife','jaboatão dos guararapes')`

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando 
  * para ordenar a tabela de produtos a partir do preço 
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 = `select nome,preco from produtos 
where preco<= 2000
order by preco desc;
`

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os meses de Outubro (10)
  * e Novembro (11)
  */
export const r3 = `select data_pedido,status from pedidos 
where data_pedido BETWEEN '2025-10-01'and '2025-11-30'; `

/* Exercício 1:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de pedidos
  */
export const r4 = ``

