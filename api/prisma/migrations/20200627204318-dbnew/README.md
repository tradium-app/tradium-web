# Migration `20200627204318-dbnew`

This migration has been generated by Suraj Shrestha at 6/27/2020, 8:43:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."stock_data" (
"company" text  NOT NULL ,"datetime" timestamp(3)  NOT NULL ,"id" SERIAL,"negative_tweets_count" integer  NOT NULL ,"news_count" integer  NOT NULL ,"positive_tweets_count" integer  NOT NULL ,"stock" text  NOT NULL ,"tweets_count" integer  NOT NULL ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200627204318-dbnew
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,23 @@
+datasource DS {
+  provider = "postgres"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Run `rw db save` to create models in db
+
+model stock_data {
+  id                    Int      @id @default(autoincrement())
+  stock                 String
+  company               String
+  datetime              DateTime
+  news_count            Int
+  tweets_count          Int
+  positive_tweets_count Int
+  negative_tweets_count Int
+  // @@unique([stock, datetime])
+}
```


