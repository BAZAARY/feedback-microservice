const resolvers = {
    Query: {
      comments: async () => {

        return [];
      },
    },
    Mutation: {
      addComment: async (_, { user, email, comment, calification, date }) => {

        return {
          user,
          email,
          comment,
          calification,
          date,
        };
      },
    },
  };
  
  module.exports = resolvers;
  