import { GraphQLSchema } from "graphql"

import StorageType from "../types/StorageType"
import MutationsSubject from "../types/MutationSubjectType"

export default new GraphQLSchema({
    query: StorageType,
    mutation: MutationsSubject
})