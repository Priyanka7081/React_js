import React from 'react'

const Person = () => {
    const name = "Uttam";
    const age = 22;
  
    const person = {
      name: 'pihu',
      age:19,
      gmail:'pihu@gmail.com',
      pincode:274406
    }
    const product = {
      title: "iphone",
      model:'iphone15',
      price:274406
    }
  
  
  
    return (
      <>
      <div>
        <h1>Name = {person.name}</h1>
        <h1>Age = {person.age}</h1>
        <h1>Gmail = {person.gmail}</h1>
        <h1>Code = {person.pincode}</h1>
  
      </div>
      <div>
        <h2>title = {product.title}</h2>
        <h2>Model= {product.model}</h2>
        <h2>Price = {product.price}</h2>
      </div>
      </>
    );
  }

export default Person