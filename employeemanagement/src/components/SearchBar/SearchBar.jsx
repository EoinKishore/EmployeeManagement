import './SearchBar.css';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value.toLowerCase());
  };

  return (
    <div className='searchBar'>
        <div className="searchIcon">
            <Search className='search' />
        </div>
        <input 
          type="text" 
          className="searchInput" 
          placeholder="Search" 
          onChange={handleSearch}
        />
    </div>
  )
}

export default SearchBar;