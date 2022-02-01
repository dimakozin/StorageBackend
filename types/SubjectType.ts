import {GraphQLString, 
    GraphQLID,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
} from 'graphql'

export default new GraphQLObjectType({
    name: "Subject",
    description: "Объект со склада",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: "Идентификатор объекта"
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Наименование объекта"
        },
        section: {
            type: new GraphQLNonNull(GraphQLInt),
            description: "Номер секции"
        },
        amount: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Количество"
        },
        boxId: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Идентификатор коробки"
        }
    })
})