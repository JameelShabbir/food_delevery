import React from 'react'

const Answers = ({ answer, onAnswer }) => {
    return (
        // <div className='text-center mx-5'>
        //     <label htmlFor="options" className=''>
        //         <input type="radio" name='options' id='option1' />
        //         {answer}
        //     </label>
        // </div>
        <label className='btn btn-lg btn-secondary my-1'>
            <input
                type="radio"
                name="options"
                id="option1"
                onClick={() => onAnswer(answer)} />
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        </label>
    )
}

export default Answers