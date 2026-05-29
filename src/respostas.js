/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando
  * para selecionar na tabela cliente todos os clientes
  * que moram em Jaboatão e Olinda
  */
export const r1 = `select nome,
 cidade from clientes 
where cidade in 
('Jaboatão dos Gurarrapes', ‘Olinda’);
`


/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando
  * para ordenar a tabela de produtos a partir do preço
  * de cada item, em ordem do mais caro para ao mais barato
  */
export const r2 = `select preco from produtos
where preco <= 2000 order by preco desc;`


/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando
  * para filtrar os pedidos entre os dias 12 e 18 de 
  * Dezembro
  */
export const r3 = `select nome, data_pedido, status FROM pedidos
where data_pedido
between '2025-12-12' and '2025-12-18';`


/* Exercício 4:
  * Escreva entre as áspas da variável "r4" o comando
  * para juntar informações da tabela de produtos com
  * a tabela itens_pedido
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

//produtos = id,nome,vendedor,preco,
// descricao, categoria       
//  itens_pedidos= id, pedido_id,
// produto_id, quantidade, preco_unitario

