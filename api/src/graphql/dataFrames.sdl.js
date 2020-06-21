import gql from 'graphql-tag'

export const schema = gql`
  type DataFrame {
    id: Int!
    stock: String!
    company: String!
    datetime: DateTime!
    tweets_count: Int!
    tweets_positive_sentiment: Float!
    tweets_negative_sentiment: Float!
  }

  type Query {
    dataFrames: [DataFrame!]!
  }
`
