import { GraphQLObjectType, GraphQLInputObjectType, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLInt, Source } from "graphql";
import SubjectType from "./SubjectType";
import db from '../db.json'
import fs from 'fs'

export default new GraphQLObjectType({
    name: "Mutation",
    description: "Мутации для объектов склада",
    fields: {
        addSubject: {
            type: SubjectType,
            args: {
                input: { type: new GraphQLInputObjectType({
                    name: 'AddSubjectInputType',
                    fields: {
                        title: {
                            type: new GraphQLNonNull(GraphQLString),
                            description: "Наименование объекта"
                        },
                        section: {
                            type: new GraphQLNonNull(GraphQLInt),
                            description: "Номер секции"
                        },
                        amount: {
                            type: new GraphQLNonNull(GraphQLInt),
                            description: "Количество"
                        },
                        boxId: {
                            type: new GraphQLNonNull(GraphQLString),
                            description: "Идентификатор коробки"
                        }
                    }
                })}
            },
            resolve: (source, args) => {
                let data = args.input
                data.id = db.subjects.length+1

                db.subjects.push(data)

                fs.writeFile('db.json', JSON.stringify(db), () => {})                
                return data
            }
        },
        removeItem: {
            type: GraphQLID,
            args: {
                input: {type: new GraphQLInputObjectType({
                    name: "RemoveSubjectInputType",
                    fields: {
                        id: {
                            type: new GraphQLNonNull(GraphQLID),
                            description: "Идентификатор объекта"
                        }
                    }
                })}
            },
            resolve: (source, args) => {
                const id = args.input.id
                db.subjects = db.subjects.filter(item => item.id != id)
                fs.writeFile('db.json', JSON.stringify(db), () => {})

                return id
            }
        },
        addOne: {
            type: SubjectType,
            args: {
                input: { type: new GraphQLInputObjectType({
                    name: 'AddOneInputType',
                    fields: {
                        id: {
                            type: new GraphQLNonNull(GraphQLID),
                            description: "Идентификатор объекта"
                        }
                    }
                })}
            },
            resolve: (source, args) => {
                const id = args.input.id

                const item = db.subjects.find(item => item.id == id)
                item.amount++
                fs.writeFile('db.json', JSON.stringify(db), () => {})

                return item
            }
        },
        removeOne: {
            type: GraphQLID,
            args: {
                input: {type: new GraphQLInputObjectType({
                    name: "RemoveOneInputType",
                    fields: {
                        id: {
                            type: new GraphQLNonNull(GraphQLID),
                            description: "Идентификатор объекта"
                        }
                    }
                })}
            },
            resolve: (source, args) => {
                const id = args.input.id

                const item = db.subjects.find(item => item.id == id)
                item.amount--
                fs.writeFile('db.json', JSON.stringify(db), () => {})

                return item
            }
        }

    }
})
