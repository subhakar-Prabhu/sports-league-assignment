import * as actionTypes from '../actions/actionTypes';

const teams = (state = [], action) => {

  switch (action.type) {

    case actionTypes.ADD_TEAM:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];

    case actionTypes.REMOVE_TEAM:

      return state.filter((item, i) => i !== action.id);

    case actionTypes.UPDATE_TEAM:

      return state.map((item, i) => {

        if (item.id === action.id) {
          return {
            ...item,
            name: action.name
          }
        }
        return item;
      });

    default:
      return state
  }
  
}

export default teams