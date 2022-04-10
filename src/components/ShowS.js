import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const endpoint= 'http://localhost:8000/api'

const ShowS = () => {

    const [ students, setStudents] = useState ([])
    useEffect(()=>{
        getAllStudents()
    }, [])

    const getAllStudents = async ()=>{
        const response =await axios.get('http://localhost:8000/api/students')
        setStudents(response.data)
    }

    const deleteStudent = async (id)=>{
        await axios.delete(`http://localhost:8000/api/student/${id}`)
        getAllStudents()
    }

  return (
    <div>
        <div className='d-grid gap-2'>
        <Link to="/createS" className='btn btn-success btn-lg mt-2 mb-2 text-white' > Agregar </Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Clase</th>
                    <th>Salon</th>
                    <th>Maestro</th>
                    <th>Acciones</th>
                    
                </tr>

            </thead>
            <tbody>
                { students.map((student)=>(
                    <tr key= {student.id}>
                        <td> {student.name_class} </td>
                        <td> {student.classroom} </td>
                        <td> {student.teacher} </td>
                        <td>
                            <Link to={`/editS/${student.id}`} className='btn btn-warning' >Editar</Link>
                            <button onClick={()=>deleteStudent(student.id)} className='btn btn-danger' >Eliminar</button>                            
                        </td>                     
                    </tr>
                ))}

            </tbody>

        </table>
    </div>
  )
}

export default ShowS