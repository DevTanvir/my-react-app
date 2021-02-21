import React from 'react'

const MyComponent = (props)=> {
  return (
    <>
      <h1>{props.pageInformation}</h1>
      <h2>{props.myInformation}</h2>
    </>
  )
}

export default MyComponent