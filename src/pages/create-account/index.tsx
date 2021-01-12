import AccountForm from './c-cpns/account-form'

interface ICreateAccountProps {
  message: string
}

const CreateAccount = ({message}: ICreateAccountProps) => {
  return (
    <AccountForm
      isBtnLoading={false}
      categories={[{name: '', iconName: '', id: '', type: ''}]}
      isLoading={false}
    />
  )
}

export default CreateAccount
