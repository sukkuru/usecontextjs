


import React, { useState } from 'react'

 function StateTutorial() {
    const [counter,setCounter]=useState(0)

    // let counter=0
    let increament=()=>{
        setCounter(counter+1)
        // increament=increament+1

        console.log(counter)

    }
  return (
    <div>
      {counter}
      <button onClick={increament}>increament</button>
    </div>
  )
}

export default StateTutorial