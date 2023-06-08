import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {...state, 
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((char)=>char.id !== action.payload)}
        
        case FILTER:
            const allCharFiltered = state.allCharacters.filter((character) => character.gender === action.payload )
            return {
                ...state,
                myFavorites: 
                action.payload === "All"
                ? [...state.allCharacters]
                :allCharFiltered
            }

        case ORDER: 
             const allCharactersCopy = [...state.allCharacters]  
             return {
                ...state, 
                myFavorites: action.payload === "A"
                ? allCharactersCopy.sort((charA, charB) => charA.id - charB.id )
                : allCharactersCopy.sort((charA, charB) => charB.id - charA.id )
             }

        default:
            return {...state}
    }
}

export default rootReducer