import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const endpoint= 'http://localhost:8000/api'

const ShowT = () => {
// teacher
    const [ teachers, setTeachers] = useState ([])
    useEffect(()=>{
        getAllTeachers()
    }, [])

    const getAllTeachers = async ()=>{
        const response =await axios.get('http://localhost:8000/api/teachers')
        setTeachers(response.data)
    }

    const deleteTeacher = async (id)=>{
        await axios.delete('http://localhost:8000/api/teacher/${id}')
        getAllTeachers()
    }

  return (
    <div>
        <div className='d-grid gap-2'>
        <Link to="/createT" className='btn btn-success btn-lg mt-2 mb-2 text-white' > Agregar </Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Acciones</th>

                </tr>
                
            </thead>
            <tbody>
                { teachers.map((teacher)=>(
                    <tr key= {teacher.id}>
                        <td> {teacher.name} </td>
                        <td> {teacher.last_name} </td>
                        <td> {teacher.age} </td>
                        <td> {teacher.number_phone} </td>
                        <td> {teacher.email} </td>

                        <td>
                            <Link to={"/editT/${teacher.id}"} className='btn btn-warning' >Editar</Link>
                            <button onClick={()=>deleteTeacher(teacher.id)} className='btn btn-danger' >Eliminar</button>                            
                        </td>                     
                    </tr>
                ))}

            </tbody>

        </table>
    </div>
  )
}

export default ShowT