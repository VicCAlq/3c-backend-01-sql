/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando
  * para selecionar na tabela cliente todos os clientes
  * que moram em Jaboatão e Olinda
  */
export const r1 =
`
SELECT nome, telefone, cidade
from clientes
where cidade in
('Jaboatão', ' Olinda');
`

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando
  * para ordenar a tabela de produtos a partir do preço
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 =
`
SELECT nome, preco, descricao
from produtos prod
where preco > 895
and preco < 3800
order by preco dec;
`

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os meses de Outubro (12)
  * e Novembro (18)
  */
export const r3 = 
`
SELECT data_pedido from pedidos
WHERE data_pedido betwen
'2025-12-12' and '2025-12-18'
`

/* Exercício 4:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de itens_pedidos
  */
export const r4 = 
`

`