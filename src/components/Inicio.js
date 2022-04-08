import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Inicio = () => {
  return (
    <div className="App">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div className='d-grid gap-2'>
    <Link to="/teacher" className='btn btn-success btn-lg mt-2 mb-2 text-white' > Profesores </Link>

   
    <br></br>
    <Link to="/student" className='btn btn-success btn-lg mt-2 mb-2 text-white' > Clases </Link>

    
   </div>

  </div>
  )
}

export default Inicio