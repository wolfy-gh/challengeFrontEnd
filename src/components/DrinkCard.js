import React from 'react'
import './DrinkCard.css'
import { Link } from 'react-router-dom'
import { Zoom } from '@material-ui/core'

function DrinkCard({ drink,setSearch }) {
    const handleClick = ()=> {
        setSearch("")
    }
    return (
        <Zoom in={true} timeout={1000}>
            <div className="drink_card">
                <h2>{drink.strDrink} 
                {/* {drink.strCategory} */}
                </h2>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                <Link to={`/drinks/${drink.idDrink}`} className='link_card' onClick={handleClick}>
                <div className='btn'>
                    Details
                </div>
                </Link>
            </div>
        </Zoom>
    )
}

export default DrinkCard
