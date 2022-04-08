import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint= 'http://localhost:8000/api/student'

const CreateS = () => {

    const [name_class, setName_class]=useState('')
    const [classroom, setClassroom]=useState('')
    const [teacher, setTeacher]=useState('')

    const navigate= useNavigate()

    const store = async(e)=>{
        e.preventDefault()
        await axios.post(endpoint, {name_class: name_class, classroom: classroom, teacher: teacher})
        navigate('/student')
    }

  return (
    <div>
        <h3>Agregar Clase</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label>Nombre de la Clase</label>
                <input
                   value={name_class}
                   onChange={ (e)=> setName_class(e.target.value)}
                   type='text'
                   className='form-control'                
                />
            </div>
            <div className='mb-3'>
                <label>Salon de Clase</label>
                <input
                   value={classroom}
                   onChange={ (e)=> setClassroom(e.target.value)}
                   type='text'
                   className='form-control'                
                />
            </div>
            <div className='mb-3'>
                <label>Nombre del profesor</label>
                <input
                   value={teacher}
                   onChange={ (e)=> setTeacher(e.target.value)}
                   type='text'
                   className='form-control'                
                />
            </div>
            <button type='submit' className='btn btn-primary' >Guardar</button>
        </form>
    </div>
  )
}

export default CreateS