const { GraphQLString, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLInt } = require('graphql')
const { UserType, PostType } = require('./types')
const { user, post } = require('../models')
const { createJwtToken } = require('../util/auth')

const register = {
    type: GraphQLString,
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent, args) {


        const checkUser = await User.findOne({ email: args.email })
        if (checkUser) {
            throw new Error("User with this email address already exists")
        }

        const { username, email, password } = args
        const user = new User({ username, email, password })

        await user.save()

        const token = createJwtToken(user)
        return token
    }
}

const login = {
    type: GraphQLString,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args) {
        const user = await User.findOne({ email: args.email })
        if (!user || args.password !== user.password) {
            throw new Error("Invalid credentials")
        }

        const token = createJwtToken(user)
        return token
    }
}

const createPost = {
    type: GraphQLString,
    args: {
        title: {
            type: GraphQLString
        },
        body: { type: GraphQLString },
        user_id: { type: GraphQLString }
    },
    async resolve(parent, args) {
        const post = new Post({
            title: args.title,
            body: args.body,
            user_id: args.user_id
        })
        await post.save()

        return post.id
    }
}


const createFollow = {
    type: GraphQLString,
    args: {
        follower_id: {
            type: GraphQLString
        },
        followed_id: {
            type: GraphQLString
        }
    },
    async resolve(parent, args) {
        const follow = new Follow({
            follower_id: args.follower_id,
            followed_id: args.followed_id
        })
        follow.save()
        return follow.id
    }
}

module.exports = { register, login, createPost, createFollow }