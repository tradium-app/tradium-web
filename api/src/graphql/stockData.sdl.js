import gql from 'graphql-tag'

export const schema = gql`
  type stock_data {
    id: Int!
    stock: String!
    company: String
    datetime: DateTime!
    news_count: Int
    tweets_count: Int
    positive_tweets_count: Int
    negative_tweets_count: Int
  }

  type Query {
    stock_data: [stock_data!]!
  }
`
