import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
// import styled from 'styled-components';
import { fakeUserDate } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';

const UserDetils = () => {
    const dispatch = useDispatch(() => {

    });

    const addNewUser = (name) => {
        // console.log(name);
        dispatch(addUser(name));
    }
    return (
        <>
            <div className="content">
                <div className="admin-table flex ">
                    <h1 className="admin-subtitle grid lg:grid-cols-4 text-3xl md:grid-cols-3 sm:grid-cols-2 font-bold text-green-900">List of User Details</h1>
                    <button className="btn btn-outline btn-accent float-right mr-5" onClick={() => addNewUser(fakeUserDate())}>Add New Users</button>
                </div>
                <ul className='display-flex grid'>
                    <DisplayUsers />
                </ul>
                <hr className='mt-5 mb-5' />
                <DeleteAllUsers />
            </div>
        </>
    )
};


export default UserDetils