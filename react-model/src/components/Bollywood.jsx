import React from 'react'
import Data from '../Data'
import { Link } from 'react-router'

const Bollywood = () => {

  // "category": "Bollywood"

  // we filter the bollywood data from the Data.js by targeting key category
  const BollywoodData = Data.filter((item) => item.category === "Bollywood")

  console.log(BollywoodData)

  return (
    <>
      <div>Bollywood</div>

      {/* render the filtered data on the screen by using map method */}
      {
        BollywoodData.map((bollydata) => (
          <>
            <h1>{bollydata.title}</h1>
            <img src={bollydata.img_url} />
          </>
        ))
      }
    </>
  )
}

export default Bollywood