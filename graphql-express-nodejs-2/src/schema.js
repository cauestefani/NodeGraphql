const Users = require('./services/users');
//import { Users } from ('./services/users');

let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Mock of user id',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    avatar: { type: GraphQLString },
  })
});

const returnType = new GraphQLObjectType({
  name: 'ReturnType',
  description: "retorno",
  fields: () => ({
    user: {
      type: UserType,
      description: "user",
      resolve: () =>
        Users.fetchResponseByURL()
    }
  })
});


// This is the schema declaration
const UserSchema = new GraphQLSchema({
  query: returnType
  // If you need to create or updata a datasource, 
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType 
});

module.exports = UserSchema;