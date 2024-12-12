import React from 'react'
// import { clearAllUsers } from '../store/slices/UserSlice'
import { clearAllUsers } from '../store/actions';
import { useDispatch } from 'react-redux'

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    // console.log("hi there");
    if (confirm('Are you sure you want to delete All Users?')) {
      dispatch(clearAllUsers())
    }
  }

  return (
    <div>
      <div className='text-right pl-5 text-white p-3'>
        <button className='text-right  bg-rose-500 hover:bg-rose-800 rounded px-9 py-2' onClick={deleteUsers}>
          ClearAllUser
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default DeleteAllUsers