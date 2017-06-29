import { combineReducers } from 'redux';
import picturesReducer from './pictures.js'
import priceReducer from './price.js'
import coinnameReducer from './coinname.js'

const rootReducer = combineReducers({
  pictures: picturesReducer,
  price: priceReducer,
  coinname: coinnameReducer
});

export default rootReducer;
