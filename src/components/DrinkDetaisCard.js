import React, { useState } from 'react'
import { Zoom, Slide } from '@material-ui/core'
import './DrinkDetailsCard.css'

function DrinkDetaisCard({ details }) {
    const [instruct, setInstruct] = useState(details.strInstructions)
    console.log(instruct)
    const handleClick = (e) => {
        switch (e.target.alt) {
            case 'ES':
                setInstruct(details.strInstructionsES)
                break
            case 'DE':
                setInstruct(details.strInstructionsDE)
                break
            case 'FR':
                setInstruct(details.strInstructionsDE)
                break
            default:
                setInstruct(details.strInstructions)
                break
        }
    }
    return (
        <div className="details_card">
            <div className="details_left">
                <Zoom in={true} timeout={1000}>
                    <img src={details.strDrinkThumb} alt={details.strDrink} />
                </Zoom>
            </div>
            <div className="details_right">
                <Slide in={true} direction='left' timeout={1000} mountOnEnter unmountOnExit>
                    <h1 className="details_title">{details.strDrink}</h1>
                </Slide>
                <Slide in={true} direction='left' timeout={1100} mountOnEnter unmountOnExit>
                    <h3 className="details_subtitle">Category</h3>
                </Slide>
                <Slide in={true} direction='left' timeout={1200} mountOnEnter unmountOnExit>
                    <p>{details.strCategory}</p>
                </Slide>
                <Slide in={true} direction='left' timeout={1300} mountOnEnter unmountOnExit>
                    <h3 className="details_subtitle">Ingredients</h3>
                </Slide>
                <Slide in={true} direction='left' timeout={1400} mountOnEnter unmountOnExit>
                    <ul>
                        {details.strIngredient1 ? <li>{details.strIngredient1}</li> : null}
                        {details.strIngredient2 ? <li>{details.strIngredient2}</li> : null}
                        {details.strIngredient3 ? <li>{details.strIngredient3}</li> : null}
                        {details.strIngredient4 ? <li>{details.strIngredient4}</li> : null}
                        {details.strIngredient5 ? <li>{details.strIngredient5}</li> : null}
                        {details.strIngredient6 ? <li>{details.strIngredient6}</li> : null}
                        {details.strIngredient7 ? <li>{details.strIngredient7}</li> : null}
                        {details.strIngredient8 ? <li>{details.strIngredient8}</li> : null}
                        {details.strIngredient9 ? <li>{details.strIngredient9}</li> : null}
                        {details.strIngredient10 ? <li>{details.strIngredient10}</li> : null}
                        {details.strIngredient11 ? <li>{details.strIngredient11}</li> : null}
                        {details.strIngredient12 ? <li>{details.strIngredient12}</li> : null}
                        {details.strIngredient13 ? <li>{details.strIngredient13}</li> : null}
                        {details.strIngredient14 ? <li>{details.strIngredient14}</li> : null}
                        {details.strIngredient15 ? <li>{details.strIngredient15}</li> : null}
                    </ul>
                </Slide>
                <Slide in={true} direction='left' timeout={1500} mountOnEnter unmountOnExit>
                    <h3 className="details_subtitle">Measures</h3>
                </Slide>
                <Slide in={true} direction='left' timeout={1600} mountOnEnter unmountOnExit>
                    <ul>
                        {details.strMeasure1 ? <li>{details.strMeasure1} {details.strIngredient1}</li> : null}
                        {details.strMeasure2 ? <li>{details.strMeasure2} {details.strIngredient2}</li> : null}
                        {details.strMeasure3 ? <li>{details.strMeasure3} {details.strIngredient3}</li> : null}
                        {details.strMeasure4 ? <li>{details.strMeasure4} {details.strIngredient4}</li> : null}
                        {details.strMeasure5 ? <li>{details.strMeasure5} {details.strIngredient5}</li> : null}
                        {details.strMeasure6 ? <li>{details.strMeasure6} {details.strIngredient6}</li> : null}
                        {details.strMeasure7 ? <li>{details.strMeasure7} {details.strIngredient7}</li> : null}
                        {details.strMeasure8 ? <li>{details.strMeasure8} {details.strIngredient8}</li> : null}
                        {details.strMeasure9 ? <li>{details.strMeasure9} {details.strIngredient9}</li> : null}
                        {details.strMeasure10 ? <li>{details.strMeasure10} {details.strIngredient10}</li> : null}
                        {details.strMeasure11 ? <li>{details.strMeasure11} {details.strIngredient11}</li> : null}
                        {details.strMeasure12 ? <li>{details.strMeasure12} {details.strIngredient12}</li> : null}
                        {details.strMeasure13 ? <li>{details.strMeasure13} {details.strIngredient13}</li> : null}
                        {details.strMeasure14 ? <li>{details.strMeasure14} {details.strIngredient14}</li> : null}
                        {details.strMeasure15 ? <li>{details.strMeasure15} {details.strIngredient15}</li> : null}
                    </ul>
                </Slide>
                <Slide in={true} direction='left' timeout={1700} mountOnEnter unmountOnExit>
                    <div className="details_subtitle insturct">
                        <h3>Instructions</h3>
                        <div className="details_lang" >
                            {details.strInstructions ? <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" alt='EN' onClick={handleClick} /> : null}
                            {details.strInstructionsES ? <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png" alt='ES' onClick={handleClick} /> : null}
                            {details.strInstructionsDE ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png" alt='DE' onClick={handleClick} /> : null}
                            {details.strInstructionsFR ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/640px-Flag_of_France.svg.png" alt='FR' onClick={handleClick} /> : null}
                        </div>
                    </div>
                </Slide>
                <Slide in={true} direction='left' timeout={1800} mountOnEnter unmountOnExit>
                    <p>{instruct}</p>
                </Slide>
                
            </div>
        </div>
    )
}

export default DrinkDetaisCard
