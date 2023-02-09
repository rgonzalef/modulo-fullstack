const express = require('express')
const app = express()

const{ graphqlHTTP } = require ('express-graphql')//permite crear la ruta absoluta del API
const { buildSchema } = require('graphql') //permite crear y definir el schema
const { request } = require( 'express' );

const {books} = require('./data.json')

const schema = buildSchema(`

type Query {
    getWelcome:String 
    getPersonalInfo(name:String, age:Int): String
    getBooks: [Book]
    getBookByAuthor(author: String): [Book]
}

type Mutation{
    addBook(id:Int!, title:String, author:String) : [Book]
    updateBook(id:Int!, title:String, author:String) : Book
    deleteBook(id:Int!) : [Book]
}

type Book {
    id: Int
    title: String
    author: String
}
`)
function deleteBook({id}){
    
    return books.filter(line => {return line.id !== id})

}


function updateBook ( {id, title, author}){
    //Find the book to update
    books.map(book => {
        if(book.id ===id){
            book.title = title ? title : book.title
            book.author = author ? author: book.author
        }
        
        return book
    })
    //return the updated book
    return books.find(book => book.id = id)
}

function getBookByAuthor( {author}){
    var booksByAuthor = books.filter( (line) => {
        return line.author === author
    })
}

function addBook( {id, title, author}){
    //create object
    var newBook = {id:id, title:title, author:author}

    //insert object to the collection
    books.push({id:id, title:title, author:author})

    //return all the books
    return books

}

function getBooks (){
    return books
}

function getWelcome(){
    return "Hola Mundo"
}

function getPersonalInfo( args){
    return "Hola " + args.name + ', ' + 'tu edad es ' + args.age
}



const root = {

    getWelcome: getWelcome,
    getPersonalInfo: getPersonalInfo,
    getBooks: getBooks,
    addBook: addBook,
    getBookByAuthor: getBookByAuthor,
    updateBook: updateBook,
    deleteBook: deleteBook
}

app.use( '/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


//Para que el servidor escuche 
const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, () => {
    console.log(`Server is running in port ${PUERTO}`)
} )