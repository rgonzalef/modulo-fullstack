import {gql} from "@apollo/client"

export const CREATE_NOTE = gql `

    mutation createNote($title: String, $content: String, $author: String, $date: String){
        createNote(title: $title, content: $content, date:$date, author: $author){
            _id
            title
            content
            date
            author
        }
    }

`

export const UPDATE_NOTE = gql `
    mutation updateNote($_id: ID, $title: String, $content: String, $author: String, $date: String){
        updateNote(_id:$_id, title: $title, content: $content, date:$date, author: $author){
            _id
            title
            content
            date
            author 
        }
    }
`
export const REMOVE_NOTE = gql`

    mutation deleteNote($_id: ID){
        deleteNote(_id: $_id ){
            _id
            title
            content
            date
            author

        }
    }
`