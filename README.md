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

  - SENTRY_AUTH_TOKEN
  - SENTRY_IGNORE_API_RESOLUTION_ERROR
  - SENTRY_DSN
  - QUIRREL_TOKEN
  - QUIRREL_ENCRYPTION_SECRET
  - QUIRREL_API_URL
  - QUIRREL_BASE_URL
  - DATABASE_URL
  - ENVIRONMENT

- Fly
  - PASSPHRASES
  - REDIS_URL

## Complementos

[quirrel-redis-fly](https://github.com/JoaoZanetti/quirrel-redis-fly) - Arquivos de configuração para subir o Redis no Fly.io
[quirrel-server-fly](https://github.com/JoaoZanetti/quirrel-server-fly) - Arquivos de configuração para subir o Quirrel no Fly.io
