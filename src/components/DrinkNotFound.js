import React from 'react'
import './DrinkNotFound.css'
import LocalBarIcon from '@material-ui/icons/LocalBar';

function DrinkNotFound() {
    return (
        <div className='d'>
            <div className='opsss'>
                <LocalBarIcon style={{ fontSize: '50%', color: "orange" }} />
            </div>
            <div className='__1'>DRINK</div>
            <div className='__2'>DOES NOT EXIST</div>
        </div>
    )
}

export default DrinkNotFound
