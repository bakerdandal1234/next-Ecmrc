import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
async function getData() {
    // await new Promise(resolve => setTimeout(resolve, 5000))
    const res = await fetch('http://localhost:4000/products', { next: { revalidate: 0 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data')
      notFound()
    }
   
    return res.json()
  }
const Products = async() => {
    const data=await getData()
    return (
        <section className="products flex">
      {data.map((item) => {
       return(
         <article title={item.title}   key={item.id}  className="card">
         <Link href={`/product-detail/${item.id}`}>
           <Image width={266} height={300} quality={100} src={item.productImg}  alt="Picture of the author"  />
         </Link>
         <div style={{ width: 266 }} className="content">
           <h1 className="title">{item.title.slice(0,15)}...</h1>
           <p className="description">
            {item.description.slice(0,111)}...
           </p>
           <div
             className="flex"
             style={{ justifyContent: "space-between", paddingBottom: "0.7rem" }}
           >
             <div className="price">{item.price}</div>
             <button className="add-to-cart flex">
               {/* <i className="fa-solid fa-cart-plus" /> */}
               <FontAwesomeIcon style={{width: "1.1rem"}} icon={faCartPlus}  />
               Add To Cart
             </button>
           </div>
         </div>
       </article>
       )
      })}
       </section>
    );
}

export default Products;
