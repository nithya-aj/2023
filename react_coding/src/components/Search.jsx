import React, { useState } from 'react'

const Search = () => {

    const [list, setList] = useState(['apple', 'kiwi', 'mango', 'pineapple'])
    const [searchText, setSearchText] = useState('')
    let searchResult = list.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <div>
            <input type="text" placeholder='Search anything...' onChange={(e) => setSearchText(e.target.value)} />
            <ul>
                {searchResult.map((item) => (<li>{item}</li>))}
            </ul>
        </div>
    )
}

export default Search