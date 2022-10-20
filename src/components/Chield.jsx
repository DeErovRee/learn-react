export const Chield = ({name, handleChangeCount}) => {
    const handleClick = () => {
        handleChangeCount(prevCount => prevCount + 1)
    }
    return <>
    <p>{name}</p>
    <button onClick={handleClick}>Click</button>
    </>
}