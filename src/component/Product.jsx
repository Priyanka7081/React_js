import React from 'react'

const Product = ({title,brand,price,
  rom,ram,camera,fingerprint}) => {
    const obj ={
       
    }
  return (
    <div>
        <h2>{ title }</h2>
        <h3>{ brand }</h3>
        <h4>{ price }</h4>
        <h3>ROM ={rom}</h3>
        <h3>RAM = {ram}</h3>
        <h3>CAMERA = {camera}</h3>
        <h3>FINGERPRINT ={fingerprint}</h3>
    </div>
  )
}

export default Product