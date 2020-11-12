import './App.css';
import {useState,useEffect} from 'react'
import Axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Details from './components/DrinkDetails'
import Page404 from './pages/Page404'


function App() {
  const [drinks, setDrinks] = useState([])
    const [drinkload, setDrinkload] = useState(true)
    const [search , setSearch] = useState("")
    // fetchData from API
    const getAllDrinks = async () => {
        try {
            const res = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            setDrinks(res.data.drinks)
            setDrinkload(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllDrinks()
    }, [search])

  

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact render={()=> <Home drinks={drinks} drinkload={drinkload} search={search}  setSearch={setSearch}/>} />
          <Route path="/drinks/:id" render={(props) => { return <Details {...props} /> }} />
          <Route path="/about" component={About} />
          <Route path="/" component={Page404} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
