import { Suspense } from 'react'
import './home.css'
import Loading from './loading'
import Products from './products';




// const arr=[
//   {imageArr:"./images/1.png"},
//   {imageArr:"./images/2.webp"},
//   {imageArr:"./images/3.webp"},
//   {imageArr:"./images/4.webp"},
//   {imageArr:"./images/5.webp"},
//   {imageArr:"./images/6.webp"},
//   {imageArr:"./images/7.webp"},
//   {imageArr:"./images/8.png"},
  
// ]





export default async function Home() {
  return (
    <>
    <div className="top-img">
      <section className="content">
        <p className="lifestyle">Lifestyle collection</p>
        <p className="men">MEN</p>
        <p className="sale">
          SALE UP TO <span>30% OFF</span>
        </p>
        <p className="free-shipping">Get Free Shipping on orders over $99.00</p>
        <button>Shop Now</button>
      </section>
    </div>
    <main className="">
      <h1 className="recommended">
        <i className="fa-solid fa-check" />
        Recommended for you
      </h1>
      <Suspense fallback={<Loading/>}>
      <Products/>
     </Suspense>
    </main>
   
  </>
  
  );
}
