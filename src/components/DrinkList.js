import React from 'react'
import './DrinkList.css'
import { CircularProgress } from '@material-ui/core'



function DrinkList({ drinkload, post }) {
    console.log(post.length)
    var list
    if (post.length >= 1) {
        list = <div className='list'>
            {drinkload ? <div className="progress">
                <CircularProgress />
            </div> : post}
        </div>
    }else {
        list = post
    }



    return (
    
           <div>{list}</div>
        

    )
}

export default DrinkList
