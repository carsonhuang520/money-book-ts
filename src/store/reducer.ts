import {combineReducers} from 'redux-immutable'
import {reducer as accountReducer} from '../pages/create-account/store'

const reducer = combineReducers({
  account: accountReducer,
})

export default reducer
