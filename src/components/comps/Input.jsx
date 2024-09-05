import css from '../../styles/styles.css'

const {Input} = css


const InputComponent = (params) => {

    const { placeholder, maxLength } = params

    return (
        <Input
        type={"text"}
        placeholder={placeholder}
        maxLength={maxLength}
        />
    )
}

export default InputComponent;