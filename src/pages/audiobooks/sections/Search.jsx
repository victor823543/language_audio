import DropdownSearch from "../../../components/DropdownSearch"

const Search = ({bookObjectList}) => {
  return (
    <div>
        <DropdownSearch options={bookObjectList}/>
    </div>
  )
}

export default Search