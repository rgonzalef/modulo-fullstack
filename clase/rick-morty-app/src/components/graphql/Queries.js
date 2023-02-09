import {gql} from "@apollo/client"

const CHARACTERS = gql`

query characters{
    characters{

        results{
            name
            id
            gender
            image
        }
    }
}
`
const EPISODES = gql`

query episodes{
    episodes{

        results{
            name
            id
            episode
            air_date
        }
    }
}
`
export {CHARACTERS, EPISODES}