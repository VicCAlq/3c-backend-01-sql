/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando 
  * para selecionar na tabela cliente todos os clientes 
  * que moram em Jaboatão e Olinda
  */
export const r1 = `SELECT * FROM clientes WHERE cidade IN ("Jaboatão", "Olinda")`

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando 
  * para ordenar a tabela de produtos a partir do preço 
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 = `select * from produtos order by preco desc`

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os dias 12 e 18 de Dezembro
  */
export const r3 = `select * from pedidos where data_pedido between '2025-12-12' AND '2025-12-18' `

/* Exercício 1:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de itens_pedido
  */
export const r4 = `select p.nome, ip.preco_unitario
from produtos p 
join itens_pedido ip
on p.id = ip.produto_id`

