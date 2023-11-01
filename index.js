const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require('./src/scheme');
const resolvers = require('./src/resolvers');
const userRoutes = require("./src/routes/commentsRoutes");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());
app.use('/api', userRoutes);

// Routes
app.get("/", (req, res) => {
    res.send("Connection successful");
});

// Connection to MongoDB
mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("Connection to DB successful");
});

// Configuración de Apollo Server
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, 
});

// Asegúrate de iniciar el servidor antes de aplicar el middleware
apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app });

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});
