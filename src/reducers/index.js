import { combineReducers } from 'redux'
import { SET_STREAM_URI } from '../actions/map.types'
import { SET_PLAYER } from '../actions/player.types'

export const player = (state = null, action) => {
    switch (action.type) {
        
        case SET_PLAYER:
            return action.player
        default:
            return state
    }
}

export const manifestUri = (state = '', action) => {
    switch (action.type) {
        
        case SET_STREAM_URI:
            return action.uri
        default:
            return state
    }
}


const rootReducer = combineReducers({
  player,
  manifestUri
})

export default rootReducer