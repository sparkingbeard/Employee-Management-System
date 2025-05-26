import React from 'react'
import {useNavigate} from 'react-router-dom'

const EmployeeList = () => {
  const navigate = useNavigate();
  return (
     <div className="container mx-40 flex flex-col space-y-5">
        <div>
          <button onClick = { () => navigate('/addEmployee')} className='bg-slate-600 hover:bg-blue-700 mt-10 font-semibold px-20 py-2 rounded'>Add Employee 🧑‍💻</button>
        </div>
        <div>
          <table className='shadow'>
            <thead className='bg-slate-600'>
              <tr>
                <th className='px-6 py-3 uppercase tracking-wide'>Name</th>
                <th className='px-6 py-3 uppercase tracking-wide'>Phone</th>
                <th className='px-6 py-3 uppercase tracking-wide'>Email</th>
                <th className='px-6 py-3 uppercase tracking-wide'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-white hover:text-black'>
                <td className='px-6 py-4 whitespace-nowrap'>tushar</td>
                <td className='px-6 py-4 whitespace-nowrap'>336456457</td>
                <td className='px-6 py-4  whitespace-nowrap'>tusharbisen@gmail</td>
                <td className='px-6 py-4  whitespace-nowrap flex space-x-2'>
                  <button>Edit✏️</button>
                  <button>Delete🗑️</button>
                </td>

              </tr>
              <tr className='hover:bg-white hover:text-black'>
                <td className='px-6 py-4 whitespace-nowrap'>tushar</td>
                <td className='px-6 py-4 whitespace-nowrap'>336456457</td>
                <td className='px-6 py-4  whitespace-nowrap'>tusharbisen@gmail</td>
                <td className='px-6 py-4  whitespace-nowrap flex space-x-2'>
                  <button>Edit✏️</button>
                  <button>Delete🗑️</button>
                </td>
              </tr>
              <tr className='hover:bg-white hover:text-black'>
                <td className='px-6 py-4 whitespace-nowrap'>tushar</td>
                <td className='px-6 py-4 whitespace-nowrap'>336456457</td>
                <td className='px-6 py-4 whitespace-nowrap'>tusharbisen@gmail</td>
                <td className='px-6 py-4  whitespace-nowrap flex space-x-2'>
                  <button>Edit✏️</button>
                  <button>Delete🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default EmployeeList