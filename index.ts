import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import StorageScheme from './schemes/StorageScheme'
import cors from 'cors'

const port = 3000
const app = express();

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: StorageScheme,
    graphiql: true
}))

app.listen(port)

