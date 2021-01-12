import * as actionTypes from './constants'
import {Map} from 'immutable'

interface IAction {
  type: string
  value: string
}

const defaultState: Map<string, string> = Map({
  type: 'outcome',
  navType: 'account',
})

function reducer(
  state: Map<string, string> = defaultState,
  action: IAction
): Map<string, string> {
  switch (action.type) {
    case actionTypes.CHANGE_ACCOUNT_TYPE:
      return state.set('type', action.value)

    default:
      return state
  }
}

export default reducer
