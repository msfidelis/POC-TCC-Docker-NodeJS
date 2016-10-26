# POC-TCC-Docker-NodeJS
POC do meu TCC - REST API em NodeJS e Mongo rodando em Docker. 

# Como usar:

* Clone o projeto:

```
  # git clone git@github.com:msfidelis/POC-TCC-Docker-NodeJS.git
```

* Build do projeto

```
  # cd POC-TCC-Docker-NodeJS/
  # docker-compose up -d 
```

* url

```
  http://localhost:8080
```

#Metodos

* Create - POST
```
 http://localhost:8080/api/add {descricao: String, concluido: Boolean}
```

* Update - PUT
```
 http://localhost:8080/api/add {_id, descricao: String, concluido: Boolean}
```

* READ - GET
```
 http://localhost:8080/api/all 
 http://localhost:8080/get/{descricao}
```

* DELETE - DELETE
```
 http://localhost:8080/api/all 
 http://localhost:8080/api/delete/{id}
```
