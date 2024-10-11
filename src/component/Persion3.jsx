import React from 'react'

const Persion3 = ({name,age}) => {

  return (
    <div><h1>Name= {name}</h1>
    <h3>
        {age>18 ? <h1>you can drive</h1> : <h1>you can not drive</h1>}
    </h3>
    </div>

  )
}

export default Persion3