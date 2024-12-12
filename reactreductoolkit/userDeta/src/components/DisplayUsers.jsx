import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice';


const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    });
    console.log(data);
    const icon = {
        position: 'absolute',
        right: '20px',
        top: '9px',
        color: 'red',
        fontSize: '23px',
        borderBottom: '2px solid #fff',
        paddingBottom: '3px'
    }
    const li = {
        position: 'relative',
    }
    const deleteUser = (id) => {
        if (confirm('Are you sure you want to delete -> ' + id)) {
            dispatch(removeUser(id))
        }
    }
    return (
        data.map((user, id) => {
            return <li key={id} style={li} className='text-left pl-5 text-white border-t-2 border-indigo-500 p-3'>
                {user}
                <button className='text-right' onClick={() => { deleteUser(id) }}>
                    <i style={icon} className="fa-solid fa-trash"></i>
                </button>
            </li>

        })
    );
}

export default DisplayUsers;