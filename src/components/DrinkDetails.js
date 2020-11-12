import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './DrinkDetaisCard'
import {CircularProgress} from '@material-ui/core'

function DrinkDetails({match}) {
    const [details , setDetails] = useState([])
    const [loadDetails , setLoadDetails]= useState(true)
    const getAllDetails = async () => {
        const res = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`)
        setDetails(res.data.drinks)
        setLoadDetails(false)
    }
    useEffect(() => {
        getAllDetails()
    }, [])
    console.log(details)
    return (
        <div>
            {loadDetails ? <div  className="progress">
                    <CircularProgress /></div>: details.map((el,i)=> (<Card key={i} details={el}/>))}
        </div>
    )
}

export default DrinkDetails
