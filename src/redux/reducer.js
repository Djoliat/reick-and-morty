import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-typess";

const initialState = {
  myFavorites: [],
  allCharacters:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters:[...state.allCharacters, action.payload]
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== Number(action.payload)),
      };
      case FILTER:
        const myCharacterFilter = state.allCharacters.filter(character => 
          character.gender === action.payload)
          return {
            ...state,
          myFavorites:
          action.payload === "allCharacters"
          ? [...state.allCharacters]
          : myCharacterFilter
          }
      case ORDER :
        const orderCharacter = [...state.allCharacters]
        return {
          ...state,
          myFavorites:
          action.payload === 'A'
          ?orderCharacter((a, b)=>a.id - b.id)
          :orderCharacter((a, b)=>b.id - a.id)
        }

    default:
      return { ...state };
  }
};
 export default reducer