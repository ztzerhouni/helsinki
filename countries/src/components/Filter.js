const Filter = ({searchString,handleSearchString}) => {
    return (
        <>
            filter shown with <input
                value={searchString}
                onChange={handleSearchString}
              />
        </>

    )
}

export default Filter