import React ,{useEffect}from 'react';
import SearchBoxCSS from './component_style.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/authReducer/searchSlice';

// Function will be used to search within bus, driver, and Route pages
function SearchBox() {
    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.search.searchQuery)

    const handleInputChange = (event) => {
        const query = event.target.value;
        dispatch(setSearchQuery(query));
    };
    return (
        <div className={SearchBoxCSS.search_box}>
            <input
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <AiOutlineSearch 
                className={SearchBoxCSS.icon}
                />
        </div>
    );
}

export default SearchBox;