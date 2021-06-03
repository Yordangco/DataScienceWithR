import React from 'react'

function Function() {
    function handleClick(){
        console.log('Button click')
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Function
