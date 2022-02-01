import express from 'express'


let port = 3000
const app = express();

import { GraphQLSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

import StorageType from './types/StorageType'

app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({
        query: StorageType
    }),
    graphiql: true
}))

app.listen(port)

