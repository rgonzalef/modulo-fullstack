import {GraphQLServer} from "graphql-yoga"
import resolvers from "./graphql/resolvers/index.js"
import path from "path"
import { fileURLToPath } from "url"

//Limitation using type:module this is a hijack solution
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//Limitation using type:module this is a hijack solution



const server = new GraphQLServer( {
    //TypeDefs
    typeDefs: path.join(__dirname, "graphql/schema.graphql"),
    //resolver
    resolvers
})

export default server