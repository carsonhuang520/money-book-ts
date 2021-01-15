export interface ICategory {
  name: string
  iconName: string
  id: string
  type: string
}

export interface IAccount {
  name: string
  price: number
  date: string
  monthCategory: string
  id: string
  cid: string
  timestamp: number
}

export interface INewCategory {
  id: string
  name: string
  type: string
}

export interface IAction {
  type: string
  payload: IAccount[]
}

export interface IList {
  [key: string]: IAccount[]
}

export interface ICategoryType {
  [key: string]: ICategory
}
