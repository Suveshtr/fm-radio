import * as PlayerTypes from './player.types'


export const setPlayer = (player) => ({
    type: PlayerTypes.SET_PLAYER,
    player
})
