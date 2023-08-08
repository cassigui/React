import "./styles.css"

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      placeholder='Pesquisar:'
      className='text-input'
      type="search"
      value={searchValue}
      onChange={handleChange}
    />
  )
}