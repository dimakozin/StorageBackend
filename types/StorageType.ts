import { GraphQLList, GraphQLObjectType } from "graphql"
import SubjectType from "./SubjectType"
import db from '../db.json'

export default new GraphQLObjectType({
    name: "Storage",
    description: "Склад",
    fields: () => ({
        storage: {
            type: new GraphQLList(SubjectType),
            description: "Объекты со склада",
            resolve: () => {
                return db.subjects
            }
        }
    })
})