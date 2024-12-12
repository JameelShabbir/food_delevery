import React, { useContext, useState } from 'react'
import Context from './Context'

const Button = () => {
    const { count, updateState } = useContext(Context)

    return (
        <div className='mb-3'>
            <button onClick={() => updateState(count + 1)}>Update count </button>
        </div>
    )
}

export default Button