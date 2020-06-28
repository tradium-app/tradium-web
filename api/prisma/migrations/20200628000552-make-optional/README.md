# Migration `20200628000552-make-optional`

This migration has been generated by Suraj Shrestha at 6/28/2020, 12:05:52 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."stock_data" ALTER COLUMN "company" DROP NOT NULL,
ALTER COLUMN "negative_tweets_count" DROP NOT NULL,
ALTER COLUMN "news_count" DROP NOT NULL,
ALTER COLUMN "positive_tweets_count" DROP NOT NULL,
ALTER COLUMN "tweets_count" DROP NOT NULL;

DROP TABLE "public"."apscheduler_jobs";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200627204318-dbnew..20200628000552-make-optional
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "postgres"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -12,12 +12,12 @@
 model stock_data {
   id                    Int      @id @default(autoincrement())
   stock                 String
-  company               String
+  company               String?
   datetime              DateTime
-  news_count            Int
-  tweets_count          Int
-  positive_tweets_count Int
-  negative_tweets_count Int
+  news_count            Int?
+  tweets_count          Int?
+  positive_tweets_count Int?
+  negative_tweets_count Int?
   // @@unique([stock, datetime])
 }
```

