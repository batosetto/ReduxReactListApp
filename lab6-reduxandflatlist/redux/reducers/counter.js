import {COUNTER_INCREASE,COUNTER_DECREASE, ADD_ITEM} from '../actionTypes/index'

const initialState = {
  value: 0,
  items: []
}

export default function(state = initialState, action){
  switch (action.type){
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    case COUNTER_INCREASE: {
      const {increament} = action.payload;
      return {
        ...state,
        value: state.value + increament
      };
    }
    case COUNTER_DECREASE: {
      const {decreament} = action.payload;
      return{
        ...state,
        value: state.value - decreament
      }; 
    }
    default:
    return state;
  }
}