import css from '../../styles/styles.css'

const {Input} = css

const InputComponent = () => {
    return (
        <Input
        type={"text"}
        placeholder={"Введите сумму транзакции"}
        maxLength={100}
        />
    )
}

export default InputComponent;