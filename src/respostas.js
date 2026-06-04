/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando 
  * para selecionar na tabela cliente todos os clientes 
  * que moram em Jaboatão e Olinda
  */
export const r1 = `select nome, telefone, cidade from clientes;
where cidade in
('Jaboatão dos Guararapes', 'Olinda');`

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando 
  * para ordenar a tabela de produtos a partir do preço 
  * de cada item, em ordem do mais caro pra ao mais barato
  */
export const r2 = `select nome, preco, descricao from produtos 
order by preco desc;`

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os 12 e 18 de Dezembro
  */
export const r3 = `select data_pedido, status
from pedidos
where data_pedido 
between '2025-12-12' and '2025-12-18';`

/* Exercício 1:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de pedidos
  */
export const r4 = `select
pr.nome,
pr.vendedor,
pr.preco,
pr.descricao,
pr.categoria,
pr.id as id_produto,
ip.pedido_id,
ip.produto_id,
ip.quantidade,
ip.preco_unitario
from produtos pr
left JOIN itens_pedido ip
on ip.produto_id = pr.id;`


