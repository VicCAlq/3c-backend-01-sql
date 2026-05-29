/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando 
  * para selecionar na tabela cliente todos os clientes 
  * que moram em Jaboatão e Olinda
  */
export const r1 = `SELECT *from clientes WHERE cidade IN ('Jaboatão dos Guararapes','Olinda');`

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando 
  * para ordenar a tabela de produtos a partir do preço 
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 = `SELECT *from produtos order by preco desc`

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os meses de Outubro (10)
  * e Novembro (11)
  */
export const r3 = `SELECT *from pedidos WHERE data_pedido BETWEEN '2025-12-12' and '2025-12-18';`

/* Exercício 1:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de itens_pedidos
  */
export const r4 = `SELECT pr.id, pr.nome, pr.preco, ip.produto_id, ip.quantidade,ip.preco_unitario
from produtos pr inner join itens_pedido ip on pr.id = ip.produto_id group by pr.id;`

