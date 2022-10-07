import React from 'react'
import { SearchInput } from 'evergreen-ui'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


export default function SearchBar() {

    const [query, setQuery] = useState("");
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${query}`)
    }

    return (
        <div className='search'>
            {/* <form onSubmit={handleSubmit}>
                <SearchInput placeholder='Search Story Title' value={query} onChange={(e) => setQuery(e.target.value)} />
            </form> */}
            <form>
                <input className='search-bar' type="text" placeholder='Search Story Title' value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}
