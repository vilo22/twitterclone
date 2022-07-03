const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, QuizType, SubmissionType } = require('./types')
const { User, Post, Quiz, Submission } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users in the database',
    resolve(parent, args) {
        return User.find()
    }
}

const posts = {
    type: new GraphQLList(UserType),
    description: 'Query all posts in the database',
    resolve(parent, args) {
        return Post.find()
    }
}

module.exports = { users }