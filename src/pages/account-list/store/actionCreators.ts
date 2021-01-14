import {IAccount, IAction} from '@/libs/models'
import * as actionTypes from './constants'

export const changeAccountList = (list: IAccount[]): IAction => ({
  type: actionTypes.CHANGE_ACCOUNT_LIST,
  payload: list,
})
