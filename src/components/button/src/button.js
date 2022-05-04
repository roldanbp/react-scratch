
import { useContext } from 'react'

const Search = ({className, label, onClick}) => {
    return <div className={className}>
      <button onClick={onClick}>{label}</button>
  </div>
}

export default Search