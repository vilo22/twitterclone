const { GraphQLbjectType, GraphQLInputObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean, GraphQLFloat} = require('graphql')
const { User, Post} = require('../models');

const UserType = new GraphQLInputObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        
    })
})

const PostType = new GraphQLInputObjectType({
    name: 'Post',
    description: 'Post type',
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        title: { type: GraphQLString },
        userId: { type: GraphQLString },
    })
})

module.exports = {
    UserType,
    PostType
}