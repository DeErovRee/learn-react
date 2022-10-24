export const Form = ({data, setData, setMessage}) => {
    const {text, author} = data

    const submitForm = (e) => {
        console.log(text)
        e.preventDefault()
        if(text.length > 0) {
            setMessage(prevstate => [...prevstate, {text, author}])
        }
        setData(
            {
                text: '',
                author: '',
            }
        )
    }
    return (
        <form onSubmit={submitForm}>
            <input placeholder="Имя" value={text} onChange={(e) => 
                setData(prevstate => [{...prevstate, text: e.target.value}])} 
            />
            <input placeholder="Текст" value={author} onChange={(e) => 
                setData(prevstate => [{...prevstate, author: e.target.value}])} 
            />
            <button type="submit">Отправить</button>
        </form>
    )
}