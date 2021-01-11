import * as actionTypes from './constants'

interface IState {
  type: string
  navType: string
}

const defaultState: IState = {
  type: 'charge',
  navType: 'account',
}

function reducer(params: IState = defaultState, action: string): IState {
  switch (action) {
    case actionTypes.CHANGE_ACCOUNT_TYPE:
      return params

    default:
      return params
  }
}

export default reducer
