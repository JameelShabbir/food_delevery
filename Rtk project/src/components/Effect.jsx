import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log('i am logging everything every time', count);
    }, [count]);
    return (
        <>
            {count}
            <button onClick={() => setCount(count + 1)}>update</button>
        </>
    )
}

export default Effect