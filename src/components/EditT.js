import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint= 'http://localhost:8000/api/teacher/'

const EditS = ()=>{

    const [name, setName]=useState('')
    const [last_name, setLast_name]=useState('')
    const [age, setAge]=useState('')
    const [number_phone, setNumber_phone]=useState('')
    const [email, setEmail]=useState('')
    const {id} = useParams()

    const navigate= useNavigate()

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
             name:name,
             last_name:last_name,
             age:age,
             number_phone:number_phone,
             email:email
        })
        navigate('/teacher')
    }

    useEffect( ()=>{
        const getStudentById=async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setLast_name(response.data.last_name)
            setAge(response.data.age)
            setNumber_phone(response.data.number_phone)
            setEmail(response.data.email)
        }
        getStudentById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
        <h3>Editar profesor</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label>Nombre del profesor</label>
                <input
                   value={name}
                   onChange={ (e)=> setName(e.target.value)}
                   type='text'
                   className='form-control'                
                />
            </div>
            <div className='mb-3'>
                <label>Apellido del Profesor</label>
                <input
                   value={last_name}
                   onChange={ (e)=> setLast_name(e.target.value)}
                   type='text'
                   className='form-control'                
                />
            </div>
            <div className='mb-3'>
                <label>Edad del profesor</label>
                <input
                   value={age}
                   onChange={ (e)=> setAge(e.target.value)}
                   type='text'
                   className='form-control'                
                />
            </div>
            <div className='mb-3'>
                <label>Numero de telefono</label>
                <input
                   value={number_phone}
                   onChange={ (e)=> setNumber_phone(e.target.value)}
                   type='text'
                   className='form-control'                
                />
            </div>        
                <div className='mb-3'>
                <label>Correo del profesor</label>
                <input
                   value={email}
                   onChange={ (e)=> setEmail(e.target.value)}
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