import React, { useState } from 'react'
import Graph from "../Components/Graph"
import Table from "../Components/Table"
import Loading from '../Components/Loading'


function Tables() {
  const [error,setError] = useState('')


  if(error){
    return (
      <h1>{error}</h1>
    )
  }

  return (
    <>
    <div className=' flex  max-lg:flex-col-reverse  bg-gradient-to-br from-blue-200 to-pink-200 ' >
    <div className=' flex-1'>
      <Table  setError={setError} />
      </div>
      <div className='max-lg:w-full max-lg:flex max-lg:justify-center ' > 
      <Graph   setError={setError}  />
      </div>
     
    </div>
   
    </>
  )
}

export default Tables

