/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando 
  * para selecionar na tabela cliente todos os clientes 
  * que moram em Jaboatão e Olinda
  */
export const r1 = `select nome, cidade from clientes where cidade in('Jaboatão dos Guararapes', 'Olinda');`

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando 
  * para ordenar a tabela de produtos a partir do preço 
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 = `select preco from produtos -- where preco <= 2000
order by preco desc;
`

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os meses de Outubro (10)
  * e Novembro (11)
  */
export const r3 = `select data_pedido from pedidos
where data_pedido between '2025-12-12' and '2025-12-18'`

/* Exercício 1:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de pedidos
  */
export const r4 = `select
pr.nome,
pr.preco,
pr.vendedor,
i.pedido_id,
i.produto_id,
i.quantidade
from produtos pr
join itens_pedido i 
on i.pedido_id = pr.id;`

