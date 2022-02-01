import express from 'express'
import db from './db.json'

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
    subject: ({id}) =>  db.subjects.filter( item => item.id == id )[0],
    subjects: () => db.subjects
} 

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port)

