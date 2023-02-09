import mongoose from "mongoose";

export async function connect() {

    try {
        await mongoose.connect( "mongodb+srv://admin:admin@graphql-mongo.gph8n0f.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true
        } );
        console.log('Database connected!!')
        
    } catch (error) {
        return console.log('error', error)
    }
 
}
