import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './product-detail.css'
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';



export async function generateMetadata({ params }) {
  const objData=await getData(params.id)
  return {
    title: objData.title,
    desciption:objData.description
  }
}
async function getData(iddd) {
    // await new Promise(resolve => setTimeout(resolve, 5000))
    const res = await fetch(`http://localhost:4000/products/${iddd}`, { next: { revalidate: 0 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data')
      notFound()
    }
   
    return res.json()
  }
const Page = async({params}) => {
    const objData=await getData(params.id)
    console.log(objData);
    return (
       
        <main style={{ textAlign: "center",marginTop:"42px", }} className="flex">
       
        <Image width={266} height={270} quality={100} alt="" src={`${objData.productImg}`} />

        
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{objData.title}</h2>
            <p className="price">${objData.price}</p>
          </div>
          <p className="description">
          {objData.description}
          </p>
          <button className="flex add-to-cart">
           
            <FontAwesomeIcon style={{width: "1.1rem"}} icon={faCartPlus}  />
            Add To Cart
          </button>
        </div>
      </main>

       
    );
}

export default Page;
