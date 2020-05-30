# Tradium-web

[![Netlify Status](https://api.netlify.com/api/v1/badges/bdb7dce8-c836-4f08-a05f-72c2fd9d1be7/deploy-status)](https://app.netlify.com/sites/tradium/deploys)

### Built using [Redwoodjs.com](https://redwoodjs.com)


### Setup & Start

- `yarn install` in root directory
- `rw dev` to start the dev mode

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.


### Database

We're using [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

Prisma2 is [not ready for production](https://isprisma2ready.com) at the moment.

To create a development database:

```terminal
yarn redwood db up
```

This will read the schema definition in `api/prisma/schema.prisma` and generate a sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn redwood db save` to generate a migration, and `yarn redwood db up` to apply the migration/ generate a new ORM client.
