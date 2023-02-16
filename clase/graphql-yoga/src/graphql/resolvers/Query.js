import Note from "../../models/Note.js";
import User from "../../models/User.js"

const Query = {

    async getNotes() {
        const notes = await Note.find()
        return notes

    },
    async login (_, {email, password}){
        var message
        const verifyUser = await User.find({email: email, password: password}) //returs an array
        console.log('user', verifyUser.length)

        if(verifyUser.length > 0){
            message = "User OK"
        } else {
            message = "Bad User"

        }
        return message
        
    }
   
}

export default Query