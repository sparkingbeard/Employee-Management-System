import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';


const AddEmployee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: '',
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value })
    }

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: '',
            name: '',
            phone: '',
            email: ''
        });
    }

    const save = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response)=> {
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
       
    }


    return (
        <div className='bg-slate-800 max-w-xl mx-40 my-20 px-8 py-4 shadow rounded'>
            <div className='text-4xl font-bold text-center px-8 py-4 tracking-wider'>
                <h1>Add Employee 🧑‍💼</h1>
            </div>
            <div className='mx-10 my-2 '>
                <input type='text'
                    name='name'
                    onChange={handleChange}
                    value={employee.name}
                    className='w-full py-2 px-4 text-slate-50' placeholder='Name' />
                <input type='number'
                    name='phone'
                    onChange={handleChange}
                    value={employee.phone}
                    className='w-full py-2 px-4 text-slate-50' placeholder='Phone' />
                <input type='email'
                    name='email'
                    onChange={handleChange}
                    value={employee.email}
                    className='w-full py-2 px-4 text-slate-50' placeholder='Email' />
            </div>
            <div className='flex space-x-4 px-20 my-4'>
                <button onClick={save}
                    className='bg-green-400 rounded py-2 px-6 hover:bg-green-800'>Save</button>
                <button onClick={reset}
                    className='bg-blue-400 rounded py-2 px-6 hover:bg-blue-800'>Clear</button>
                <button onClick={() => navigate('/')}
                    className='bg-red-400 rounded py-2 px-6 hover:bg-red-800'>Cancel</button>
            </div>
        </div>
    )
}

export default AddEmployee