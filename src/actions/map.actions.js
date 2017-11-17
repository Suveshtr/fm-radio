import * as MapTypes from './map.types'
import * as constants from '../constants/constants'
export const setStream = (stateName) => {
    let server
   // if (stateName === "Karnataka")
   //     server = constants.STREAM_SERVER1
   // else
        server = constants.STREAM_SERVER2

    return {
        type: MapTypes.SET_STREAM_URI,
        uri: `${server}/${stateName}/index.mpd`
    }
    
}
