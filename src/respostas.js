/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando 
  * para selecionar na tabela cliente todos os clientes 
  * que moram em Jaboatão e Olinda
  */
export const r1 = `select * from clientes where cidade in ('Jaboatão dos Guararapes', 'Olinda');`

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando 
  * para ordenar a tabela de produtos a partir do preço 
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 = `select * from produtos where preco order by preco desc;`

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os dias entre 12 e 18 de dezembro
  */
export const r3 = `select * from pedidos where data_pedido between '2025-12-12' and '2025-12-18';`

/* Exercício 4:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de itens pedidos
  */
export const r4 = `select
pr.id as id_produto,
pr.nome, pr.vendedor, pr.preco,
pr.descricao, pr.categoria,
ip.id as itens_pedido_id,
ip.pedido_id, ip.produto_id,
ip.quantidade, ip.preco_unitario
from produtos pr
inner join itens_pedido ip
on pr.id = ip.produto_id;`

