import {IAccount, IAction} from '@/libs/models'
import * as actionTypes from './constants'

interface IState {
  accountList: IAccount[]
}

const defaultState: IState = {
  accountList: [],
}

function reducer(state: IState = defaultState, action: IAction): IState {
  switch (action.type) {
    case actionTypes.CHANGE_ACCOUNT_LIST:
      return state
    default:
      return state
  }
}

export default reducer
