import React from 'react'

const Recipe = (props) => {
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <p>Calories: {props.calories}</p>
            <ol>
                {
                    props.ingredients.map((ingredient,i)=>{
                        return (<li key={i}>
                            {ingredient.text}
                        </li>)
                    })
                }
            </ol>
            <img src={props.image} alt={props.title} />
        </div>
    )
}

export default Recipe
