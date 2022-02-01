import * as express from 'express'
let port = 3000
const app = express();

import {buildSchema} from 'graphql'
import {graphqlHTTP } from 'express-graphql'

const typeDefs = `
    type Subject {
        id: ID!
        title: String!
        section: Int!
        amount: Int!
        boxId: String!
    }

    type Query {
        subject(id: ID!): Subject,
        subjects: [Subject!]
    }
`

const schema = buildSchema(typeDefs)

const resolvers = {
    subject: ({id}) => {
        return {
            "id": 1,
            "title": "Лист Д16 3000х1200х10",
            "section": 2,
            "amount": 3,
            "boxId": "Г4"
        }
    },
    subjects: () => [
        {
            "id": 1,
            "title": "Лист Д16 3000х1200х10",
            "section": 2,
            "amount": 3,
            "boxId": "Г4"
          },
          {
            "id": 2,
            "title": "Лист АМГ5 800х830х8",
            "section": 2,
            "amount": 1,
            "boxId": "Г4"
          }
    ]
} 

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port)

