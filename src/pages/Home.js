import React, { useState }  from 'react'
import List from '../components/DrinkList'
import Filter from '../components/DrinkFilter'
import Card from '../components/DrinkCard'
import Exist from '../components/DrinkNotFound'
import Pagination from '../components/Pagination'


function Home({search,setSearch,drinks,drinkload}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(9)
    //Pagination
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // HandleError search drink
    var post
    var currentPosts
    if (drinks) {
        var totalPosts = drinks.length
        if (totalPosts <= postsPerPage) {
            currentPosts = drinks
            post = drinks.map((el, i) => <Card key={i} drink={el} setSearch={setSearch} />)
        } else {
            currentPosts = drinks.slice(indexOfFirstPost, indexOfLastPost)
            post = currentPosts.map((el, i) => <Card key={i} drink={el} setSearch={setSearch} />)
        }

    }
    else {
        post = <Exist />
    }
    return (
        <div>
            <Filter setSearch={setSearch} search={search} />
            <List drinks={drinks} drinkload={drinkload} setSearch={setSearch} post={post}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} />
        </div>
    )
}

export default Home
