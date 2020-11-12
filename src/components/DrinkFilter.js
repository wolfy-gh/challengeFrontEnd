import React, { useState } from 'react'
import './DrinkFilter.css'
import SearchIcon from '@material-ui/icons/Search';
import { Zoom } from '@material-ui/core'

function DrinkFilter({ setSearch,search }) {
    const [input, setInput] = useState(false)
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleClick = () => {
        setInput(!input)
    }
    return (
        <div className='drink_filter'>
            <span></span>
            <div className="search">
                <h4 onClick={handleClick}>Search</h4>
                <Zoom in={input}  timeout={800}  mountOnEnter unmountOnExit>
                    <input type="text" placeholder="what's your drink ?" onChange={handleChange} value={search} />
                </Zoom>
                <SearchIcon className="search_icon" onClick={handleClick}/>
            </div>

        </div>
    )
}

export default DrinkFilter
