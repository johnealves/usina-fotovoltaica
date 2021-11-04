#Servidor - Usina Fotovoltaica

##Codigo Backend para o desafio Sharenergy

Para rodar este projeto clone o repositorio

apos clonar o repositorio utilise o comando "npm install" para instalar as dependencias.

Digite no terminal "npm start" para iniciar o projeto.
obs: Para fins de teste aplicação sempre que o comando "npm start" é executado a aplicação inicia um database no mongodb chamado sharenergy-johnealves com os dados dos arquivos dadosUsina.json e dadosClientes.json. Caso os banco ja exista os dados serão resetados ao estado original dos arquivos de referencia.

##Endpoints:

###Usina

####Get ("/usinas")

retorna uma lista com as informações referentes usina conforme o arquivo dadosUsina.json

###Clientes

####Get ("/clinets")

Retorna os dados de todos os clientes cadastrados no banco de dados

####Post ("/client")

Adiciona um novo cliente ao banco de dados. Para adicionar um novo cliente é necessario adicionar no corpo da requisição(body) os seguintes campos: { nomeCliente, numeroCliente, usinas: [] }

####Put ("/client/:id")

Altera os dados de um cliente já cadastrado. os dados completos do cliente são enviados no corpo da requisição ja com os dados atualizados e o id no endereço da requisição

####Delete ("/client/:id")

Delete um cliente do banco de dados a partir do "id" do cliente.

####Login ("/login")

Gera um tokem JWT e retorna o token junto com dados do usuario. Reque email e password no corpo da requisição.