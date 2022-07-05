Projeto [Next.js](https://nextjs.org/) criado usando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Iniciando

Rodando o projeto:

```bash
npm run dev
# ou
yarn dev
```

Servido em [http://localhost:3000](http://localhost:3000)

## Tecnologias / Plataformas

- [Quirrel](https://quirrel.dev/) - background/scheduled jobs.
- [Vercel](https://vercel.com/) - publicação app / api.
- [Prisma](https://www.prisma.io/) - ORM.
- [Sentry](https://sentry.io/) - logging de erros/eventos.
- [Fly.io](https://fly.io/) - deploy Quirrel e Redis.

## Variáveis

- Vercel
  - SENTRY_AUTH_TOKEN = Token exibida ao criar o projeto no Sentry
  - SENTRY_IGNORE_API_RESOLUTION_ERROR = Fixar o problema de ["API resolved without sending a response..."](https://github.com/getsentry/sentry-javascript/issues/3852)
  - SENTRY_DSN = URL do projeto Sentry. Também apresentado ao criar o projeto no Sentry.
  - QUIRREL_TOKEN = Token criada do [Quirrel](https://docs.quirrel.dev/deploying#acquire-a-token).
  - QUIRREL_ENCRYPTION_SECRET = Chave utilizada na var PASSPHRASES.
  - QUIRREL_API_URL = URL onde o Quirrel foi instalado.
  - QUIRREL_BASE_URL = URL do APP onde o quirrel irá realizar as chamadas.
  - DATABASE_URL = Connection string
  - ENVIRONMENT

- Fly
  - PASSPHRASES = Chave de criptografia (`openssl rand -hex 16`).
  - REDIS_URL = Connection string

## Complementos

[quirrel-redis-fly](https://github.com/JoaoZanetti/quirrel-redis-fly) - Arquivos de configuração para subir o Redis no Fly.io

[quirrel-server-fly](https://github.com/JoaoZanetti/quirrel-server-fly) - Arquivos de configuração para subir o Quirrel no Fly.io
