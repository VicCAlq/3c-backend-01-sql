/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando
  * para selecionar na tabela cliente todos os clientes
  * que moram em Jaboatão e Olinda
  */
export const r1 = `seletc * from cliente where cidade in('Olinda', 'Jaboatão dos Guararapes');`


/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando
  * para ordenar a tabela de produtos a partir do preço
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 = `select nome, preco from produtos order by preco asc;`


/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando
  * para filtrar os pedidos entre os dias de 12 a 18 de dezembro
  */
export const r3 = `select data_pedido, status from pedidos where data_pedido between '2025-12-12' and '2025-12-18';`


/* Exercício 4:
  * Escreva entre as áspas da variável "r4" o comando
  * para juntar informações da tabelas de produtos com
  * a tabela de pedidos
  */
export const r4 = ``

