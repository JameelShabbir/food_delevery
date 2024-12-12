import React, { useContext } from 'react'
import Context from './Context'
import Button from './Button'
const Message = () => {
    const { count } = useContext(Context)
    return (
        <div>
            <h4 className='text-danger'>{count}</h4>
            <Button />
        </div>
    )
}

export default Message