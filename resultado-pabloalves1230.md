Data de atualização: Dia 28/8/2026 às 11:8 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| respostas.js - R1 | Resposta r1 deve ser uma string | ✅ | ✅ | Sem erros |
| respostas.js - R1 | consulta a tabela clientes | ✅ | ✅ | Sem erros |
| respostas.js - R1 | filtra pela coluna cidade com IN | ✅ | ✅ | Sem erros |
| respostas.js - R1 | inclui as cidades Jaboatão dos Guararapes e Olinda | ✅ | ❌ | AssertionError: expected 'select nome,\n cidade from clientes \…' to match /["']jaboatão\s+dos\s+guararapes["']/i |
| respostas.js - R2 | Resposta r2 deve ser uma string | ✅ | ✅ | Sem erros |
| respostas.js - R2 | consulta a tabela produtos selecionando nome e preço | ✅ | ❌ | AssertionError: expected 'select preco from produtos\nwhere pre…' to match /\bnome\b/i |
| respostas.js - R2 | ordena por preço em ordem decrescente (DESC) | ✅ | ✅ | Sem erros |
| respostas.js - R3 | Resposta r3 deve ser uma string | ✅ | ✅ | Sem erros |
| respostas.js - R3 | consulta a tabela pedidos | ✅ | ✅ | Sem erros |
| respostas.js - R3 | filtra data_pedido entre 2025-10-01 e 2025-11-30 | ✅ | ❌ | AssertionError: expected 'select nome, data_pedido, status FROM…' to match /2025-10-01/ |
| respostas.js - R4 | Resposta r4 deve ser uma string | ✅ | ✅ | Sem erros |
| respostas.js - R4 | usa a tabela de ligação itens_pedido para juntar pedidos e produtos | ✅ | ❌ | AssertionError: expected 'select \npr.nome,\npr.vendedor,\npr.p…' to match /from\s+pedidos/i |
| respostas.js - R4 | define as condições de junção pelas chaves estrangeiras | ✅ | ✅ | Sem erros |
