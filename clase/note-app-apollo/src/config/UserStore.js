import { isAbstractType } from "graphql"
import create from "zustand"

const userContainer = create(( set ) => ({
    //initialize the authentication user state
    isAuthorized : { token : ""},

    //update the authentication user state
    addAuthorization: (key) => 
        set((state) => ( {
            isAuthorized: {...state.token, isAuthorized : key.token}
        })),
    removeAuthorization : () =>
        set((state) => ({
            isAuthorized: {...state.token, isAuthorized: ""}
        }))
}))

export default userContainer

