import React from 'react'

const ResponseComponent = ({data}) => {
    console.log("logged jsondata Prop:",data);
  return (
    <div>
      ResponseComponent shows the props data:{data}
    </div>
  )
}

export default ResponseComponent
