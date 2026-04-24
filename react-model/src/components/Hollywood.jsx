import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'
const Hollywood = () => {

  const HollywoodData = Data.filter((item) => item.category === "Hollywood")



  return (
    <>
      <div>Hollywood</div>
      {HollywoodData.map((hollydata) => (

        <>
         <Link to={`/post/${hollydata.id}`}>
          <h1>{hollydata.title}</h1>
          <img src={hollydata.img_url} />
          </Link>
        </>

      ))}
    </>

  )
}

export default Hollywood