import React from 'react'

const FilterProduct = () => {
    const Product = [
        {id:1,title:'iphone-16',category:'mobiles',price:90000},
        {id:2,title:'Hp probook',category:'laptops',price:90000},
        {id:3,title:'MI tab',category:'tablets',price:90000},
        {id:4,title:'Sony Camera',category:'camera',price:90000},
    ];
    const filteredData = Product.filter((data)=>data.category
    =="laptops");
    console.log(filteredData);
  return (
    <div>
        {filteredData.map((data)=><div key={data.id}>
            <h1>{data.title}</h1>
            <p>{data.price}</p>
        </div>)}
    </div>
  )
};

export default FilterProduct;



