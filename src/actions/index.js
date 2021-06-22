
import * as actionTypes from './actionTypes';

let nextPlayerId = 0;

export const addPlayer = name => {

    return {
        type: actionTypes.ADD_TEAM,
        id: nextPlayerId++,
        name
    }
}


export const removePlayer = (id) => {

    return {
        type: actionTypes.REMOVE_TEAM,
        id: id
    }

}

export const updatePlayer = (id, name) => {

    return {
        type: actionTypes.UPDATE_TEAM,
        id: id,
        name: name
    }

}

