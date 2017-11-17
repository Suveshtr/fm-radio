import * as MapTypes from './map.types'
import * as constants from '../constants/constants'
export const setStream = (stateName) => {
       return {
        type: MapTypes.SET_STREAM_URI,
        uri: `${constants.STREAM_SERVER}/${stateName}/index.mpd`
    }
    
}
