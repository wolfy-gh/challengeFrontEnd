import React from 'react'
import './Pagination.css'

function Pagination({postsPerPage , totalPosts ,paginate}) {
    const pageNumbers =[]
    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <nav className="pagination">
            <ul> 
                {pageNumbers.map(number => (
                    <li key={number}><a onClick={()=> paginate(number)} href="#">{number}</a></li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination
