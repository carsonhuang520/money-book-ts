import * as actionTypes from './constants'

interface IAction {
  type: string
  value: string
}

export const changeAccountTypeAction = (type: string): IAction => ({
  type: actionTypes.CHANGE_ACCOUNT_TYPE,
  value: type,
})
