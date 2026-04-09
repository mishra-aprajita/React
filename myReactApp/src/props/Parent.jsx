import React from 'react'
import Child from './Child'
export const Parent = () => {
    const fullname="Aprajita Mishra"
  return (
    <>
    <div>Parent</div>
    <Child name={fullname}/>
    </>
  )
}
export default Parent