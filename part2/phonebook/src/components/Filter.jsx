const Filter = ({filter, handleFilterChange}) => {
  return (
    <>
      filter shown with{' '}
      <input
        type="search"
        name="search"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  )
}

export default Filter
