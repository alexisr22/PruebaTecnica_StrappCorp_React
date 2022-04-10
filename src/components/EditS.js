import axios from "axios";
import React, {useState, useEffect, Component} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint= 'http://localhost:8000/api/student/'

const EditS = ()=>{


    const [name_class, setName_class]=useState('')
    const [classroom, setClassroom]=useState('')
    const [teacher, setTeacher]=useState('')
    const {id} = useParams()

    const navigate= useNavigate()

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            name_class:name_class,
            classroom:classroom,
            teacher:teacher
        })
        navigate('/student')
    }

    useEffect( ()=>{
        const getStudentById=async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setName_class(response.data.name_class)
            setClassroom(response.data.classroom)
            setTeacher(response.data.teacher)
        }
        getStudentById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
        <h3>Editar Clase</h3>
        <form onSubmit={update}>
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

export default EditS