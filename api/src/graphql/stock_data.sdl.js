import gql from 'graphql-tag'

export const schema = gql`
  type stock_data {
    id: Int!
    stock: String!
    company: String
    datetime: DateTime!
    open_price: Float
    high_price: Float
    low_price: Float
    close_price: Float
    volume: Int
    news_count: Int
    tweets_count: Int
    positive_tweets_count: Int
    negative_tweets_count: Int
    error: Float
    predicted_close_price: Float
  }

  type Query {
    stock_data: [stock_data!]!
  }
`
