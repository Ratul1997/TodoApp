import {Dimensions, Platform,PixelRatio} from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

///IPHONE 5's
const scale = SCREEN_WIDTH / 320

export default function normalization(size){

    const newSize = size * scale

    if(Platform.OS === 'ios'){
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }else{
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
} 