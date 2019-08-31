import React, {useEffect, useState} from 'react';
import './App.css'
import Recipe from './Recipe';

const App = () => {
    const APP_ID = 'dbca0ff5'
    const APP_KEY = 'f95679a0f4c17ccff2085f31d00980eb'
    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

    // const [counter, setCounter] = useState(0)
    const [recipes, setRecipes] = useState([])
    
    useEffect(()=>{
        getResponse()
    }, [])

    const getResponse = async () => {
        const resonse = await fetch(exampleReq)
        const data = await resonse.json()
        console.log(data.hits)
        setRecipes(data.hits)
    }
    return(
        <div className="App">
            <form className="search-bar">
                <input className="search-bar" type="text"/>
                <button className="search-button" type="submit">Search</button>
            </form>
            {/* <h1 onClick={()=>setCounter(counter+1)}>{counter}</h1> */}
            {
                recipes.map((recipe,i)=>(
                    <Recipe key={i} title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                    />
                ))
            }
        </div>
    )
}

export default App