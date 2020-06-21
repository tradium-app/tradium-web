# Tradium-web
https://tradium.netlify.app
<br />
<br />
[![Netlify Status](https://api.netlify.com/api/v1/badges/bdb7dce8-c836-4f08-a05f-72c2fd9d1be7/deploy-status)](https://app.netlify.com/sites/tradium/deploys)

### Built using [Redwoodjs.com](https://redwoodjs.com)


### Setup & Start

- `yarn install` in root directory
- `rw dev` to start the dev mode

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.


### Database

We're using [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

To create a development database:

```terminal
rw db up
```

This will create postgres tables from schema at `api/prisma/schema.

If you've made changes to the schema run `rw db save` to generate a migration, and `rw db up` to apply the migration/ generate a new ORM client.
