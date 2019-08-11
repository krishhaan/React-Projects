import {combineReducers} from 'redux';
import commonReducer from '../reducers/commonReducer';
import filterReducer from '../reducers/filterReducer';
import detailsReducer from '../reducers/detailsReducer';


const reservationReducer= combineReducers({
    commonReducer,filterReducer,detailsReducer}
)

export default reservationReducer;