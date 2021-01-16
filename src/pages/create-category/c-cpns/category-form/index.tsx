import React, {useState} from 'react'

import {INewCategory} from '@/libs/models'
import {confirm} from '@/libs/utils'

import {Input, Button} from 'antd'
import IconList from '../icon-list'
import {CategoryFormWrapper} from './style'

interface IProps {
  type: string
  categories: INewCategory[]
}

const CategoryForm = ({type, categories}: IProps) => {
  const [name, setName] = useState<string>('')
  const [current, setCurrent] = useState<INewCategory>({
    name: '',
    id: '',
    type: '',
  })

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const onClickItem = (item: INewCategory) => {
    setCurrent(item)
  }

  const validateForm = (name: string, current: INewCategory): boolean => {
    if (name === '') {
      confirm('类别名称不能为空!')
      return false
    }
    if (current.id === '') {
      confirm('请选择一个类别图标!')
      return false
    }
    return true
  }

  const onCreateCategory = (): void => {
    const isValid = validateForm(name, current)
    if (!isValid) {
      return
    }
  }

  return (
    <CategoryFormWrapper>
      <div className={'form-wrapper'}>
        <ul className={'form-list'} style={{marginBottom: '1em'}}>
          <li className={'form-item'}>
            <label className={'form-item-label'}>名字</label>
            <div className={'form-item-content'}>
              <Input
                className={'form-item-input'}
                onChange={(e) => onNameChange(e)}
                value={name}
                placeholder="请输入标签名"
                allowClear
              />
            </div>
          </li>
          <li className={'form-item'}>
            <p className={'form-item-label'} style={{marginBottom: '1em'}}>
              分类
            </p>
            <IconList
              categories={categories}
              type={type}
              onClickItem={onClickItem}
              current={current}
            />
          </li>
        </ul>
        <div className={'button-wrapper'}>
          <Button
            shape="round"
            className={'btn-create'}
            type={'primary'}
            onClick={onCreateCategory}
          >
            确定
          </Button>
        </div>
      </div>
    </CategoryFormWrapper>
  )
}

export default CategoryForm
