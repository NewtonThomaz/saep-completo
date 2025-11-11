# Script de população das Tabelas

# Tabela login
USE saep_db;
INSERT INTO login (name, password, username) 
VALUES ('Newton', 'newton@pass123', 'newton'),
	   ('Lucas Gomes', 'lucas@123', 'Lucas'),
	   ('João Carlos', 'estoque!456', 'Juninho');

# Tabela produto
USE saep_db;
INSERT INTO produto (ano_fabricacao, especificacoes, material, estoque_minimo, marca, modelo, nome, tamanho, peso) 
VALUES ('2023', 'revestimento isolante', 'Ferro forte', 3.0, 'AutoParts', 'Alicate de eletricista', 'Alicate', 24.50, 56.90),
       ('2022', 'ponta imantada', 'Cobre', 4.0, 'ChaveTop', 'Fenda', 'Chave de fenda', 45.00, 21.90),
	   ('2023', 'revestimento isolante', 'Aço carbono', 2.0, 'Spark', 'Turquesa', 'Alicate de corte, turquesa', 22.00, 45.00);
       
# Tabela estoque
USE saep_db;
INSERT INTO estoque (localizacao, quantidade, id_produto) 
VALUES ('Corredor A, Prateleira 1', 150, 1),
	   ('Corredor A, Prateleira 2', 80, 2),
	   ('Corredor B, Prateleira 5', 300, 3);# Script de população das Tabelas

# Tabela login
USE saep_db;
INSERT INTO login (name, password, username) 
VALUES ('Newton', 'newton@pass123', 'newton'),
	   ('Lucas Gomes', 'lucas@123', 'Lucas'),
	   ('João Carlos', 'estoque!456', 'Juninho');

# Tabela produto
USE saep_db;
INSERT INTO produto (ano_fabricacao, especificacoes, material, estoque_minimo, marca, modelo, nome, tamanho, peso) 
VALUES ('2023', 'revestimento isolante', 'Ferro forte', 3.0, 'AutoParts', 'Alicate de eletricista', 'Alicate', 24.50, 56.90),
       ('2022', 'ponta imantada', 'Cobre', 4.0, 'ChaveTop', 'Fenda', 'Chave de fenda', 45.00, 21.90),
	   ('2023', 'revestimento isolante', 'Aço carbono', 2.0, 'Spark', 'Turquesa', 'Alicate de corte, turquesa', 22.00, 45.00);
       
# Tabela estoque
USE saep_db;
INSERT INTO estoque (localizacao, quantidade, id_produto) 
VALUES ('Corredor A, Prateleira 1', 150, 1),
	   ('Corredor A, Prateleira 2', 80, 2),
	   ('Corredor B, Prateleira 5', 300, 3);# Script de população das Tabelas

# Tabela login
USE saep_db;
INSERT INTO login (name, password, username) 
VALUES ('Newton', 'newton@pass123', 'newton'),
	   ('Lucas Gomes', 'lucas@123', 'Lucas'),
	   ('João Carlos', 'estoque!456', 'Juninho');

# Tabela produto
USE saep_db;
INSERT INTO produto (ano_fabricacao, especificacoes, material, estoque_minimo, marca, modelo, nome, tamanho, peso) 
VALUES ('2023', 'revestimento isolante', 'Ferro forte', 3.0, 'AutoParts', 'Alicate de eletricista', 'Alicate', 24.50, 56.90),
       ('2022', 'ponta imantada', 'Cobre', 4.0, 'ChaveTop', 'Fenda', 'Chave de fenda', 45.00, 21.90),
	   ('2023', 'revestimento isolante', 'Aço carbono', 2.0, 'Spark', 'Turquesa', 'Alicate de corte, turquesa', 22.00, 45.00);
       
# Tabela estoque
USE saep_db;
INSERT INTO estoque (localizacao, quantidade, id_produto) 
VALUES ('Corredor A, Prateleira 1', 150, 1),
	   ('Corredor A, Prateleira 2', 80, 2),
	   ('Corredor B, Prateleira 5', 300, 3);