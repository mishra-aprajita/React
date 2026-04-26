import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'
const Food = () => {
//  "category": "Food"
//we filter the Food data from the Data.js by targeting key category
const BollywoodData= Data.filter((item)=>item.category==="Food")
console.log(FoodData)
  return (
    <>
    <div>Food</div>
    {/* render the filtered data on the screen by using map method */}
    {BollywoodData.map((Food)=>(

      <>
      <Link to={`/post/${Food.id}`}>
        <h1>{Food.title}</h1>
        <img src={Food.img_url}/>
      </Link>
      </>
    ))}
    </>
  )
}

export default Food