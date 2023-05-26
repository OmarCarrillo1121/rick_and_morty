import { ADD_FAV } from "./actions"
import { REMOVE_FAV } from "./actions"

const initialState = {
    myFavorites: []
}

const rootReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, action.payload]}

        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((char)=>char.id !== action.payload)}
            
        default:
            return {...state}
    }
}

export default rootReducer