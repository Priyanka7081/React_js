import React from 'react'

const ShowProduct = () => {
    let produsts = [
        {id:1,title:'iphone - 15',price:150000},
        {id:2,title:'iphone - 16',price:120000},
        {id:3,title:'iphone - 17',price:10000},
        {id:4,title:'iphone - 18',price:90000},
    ]
  return (
    <div>
       {produsts.map((data)=><div key={data.id}>
        <h1>Title = {data.title}</h1>
        <h1>Price = {data.price}</h1>
       </div>)}
    </div>
  )
}

export default ShowProduct