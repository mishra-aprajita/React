import React from 'react'

const Ternary = () => {

    const isLoggedin = true;

  return (
    <>
    <div>Ternary</div>
    {isLoggedin?"welcome to dashboard" : "Please Login"}
    </>
  )
}

export default Ternary