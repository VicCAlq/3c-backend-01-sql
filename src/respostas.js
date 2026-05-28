/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando 
  * para selecionar na tabela cliente todos os clientes 
  * que moram em Jaboatão e Olinda
  */
export const r1 = export const r1 = SELECT from clientes; where cidade in
('Jaboatão', 'Olinda')

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando 
  * para ordenar a tabela de produtos a partir do preço 
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 = SELECT from produtos 
where preco <= 999999
order by preco desc;

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os meses de Outubro (12)
  * e Novembro (18)
  */
export const r3 = SELECT from pedidos
where data_pedidos BETWEEN '2025/12/12' AND '2025/12/18'

/* Exercício 1:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de pedidos
  */
export const r4 = SELECT FROM produtos INNER JOIN pedidos ON produtos.id_produto = pedidos.id_produto;

