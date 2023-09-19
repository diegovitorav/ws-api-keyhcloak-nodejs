## Container Frontend
1. comando para criar container
```bash
docker build -t frontend/node .
```

2. comando para executar o container
```bash
docker run --name frontend -p 8000:8000 -d frontend/node
```

## Container Backend
1. comando para criar container
```bash
docker build -t backend/node .
```

2. comando para executar o container
```bash
docker run --name backend -p 3000:3000 -d backend/node
```
## Docker Compose

## --compatibility aplica restrições de Memória RAM

Comando para subir o keycloak
```bash
docker compose -f docker-compose-keycloak-postgres.yml -p keycloak up -d
```
Comando para subir o frontend e o backend
```bash
docker compose -f docker-compose.yml -p meuapp --compatibility up -d
```


## Testando a aplicação

  1.  Criar um realm myrealm
  2.  Criar uma role myrole
  3.  Criar um client myclient