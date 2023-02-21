import mongoose from "mongoose"

const uri = 'mongodb+srv://admin:admin@graphql-mongo.gph8n0f.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then( (db) => {
    return console.log('DB is connected')
})
.catch( (err) => console.log(err))