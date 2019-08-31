import React, {useEffect, useState} from 'react';
import './App.css'
import Recipe from './Recipe';

const App = () => {
    const APP_ID = 'dbca0ff5'
    const APP_KEY = 'f95679a0f4c17ccff2085f31d00980eb'

    // const [counter, setCounter] = useState(0)
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')

    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    useEffect(()=>{
        getResponse()
    }, [query])

    const getResponse = async () => {
        const resonse = await fetch(exampleReq)
        const data = await resonse.json()
        console.log(data.hits)
        setRecipes(data.hits)
    }

    const updateSearch = (e) => {
        setSearch(e.target.value)
        // console.log(search)
    }

    const getSearch = e =>{
        e.preventDefault()
        setQuery(search)
    }

    return(
        <div className="App">
            <form onSubmit={getSearch} className="search-bar">
                <input className="search-bar" type="text" 
                    value={search} 
                    onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>
            {/* <h1 onClick={()=>setCounter(counter+1)}>{counter}</h1> */}
            {
                recipes.map((recipe,i)=>(
                    <Recipe key={i} title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))
            }
        </div>
    )
}

export default App