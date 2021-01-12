import AccountForm from './c-cpns/account-form'

interface ICreateAccountProps {
  message: string
}

const CreateAccount = ({message}: ICreateAccountProps) => {
  return (
    <div className="content">
      <AccountForm
        isBtnLoading={false}
        categories={[{name: '', iconName: '', id: '', type: ''}]}
        isLoading={false}
      />
    </div>
  )
}

export default CreateAccount
