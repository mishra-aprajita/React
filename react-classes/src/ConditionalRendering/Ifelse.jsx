import React from 'react'

const Ifelse = () => {

    const isAgent = true; 
    let msg;
    if(isAgent){
        msg="Khatam...tata.. goodbye"
    }
    else{
        msg="welcome to karachi"
    }
  return (
    <>
    <div>Ifelse</div>
    <h1>{msg}</h1>
    </>
  )
}

export default Ifelse