import express from 'express'

let port = 3000
const app = express();

import { graphqlHTTP } from 'express-graphql'
import StorageScheme from './schemes/StorageScheme'

app.use('/graphql', graphqlHTTP({
    schema: StorageScheme,
    graphiql: true
}))

app.listen(port)

