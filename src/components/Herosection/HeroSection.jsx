import React from 'react';
import "./Herosection.css";
import chairImg from "../../../assets/img12.png"
import { useMyContext } from '../../MyContext';
import CustomButton from '../../UI/CustomButton';
import Title from "../../UI/Title"

const HeroSection = () => {
  const { addToCart } = useMyContext();
  const product={
    id:1,
    title:'CALIN',
    price:1499,
    discount:900,
    description:"by Pascal Mourgue"
  };
  function handleAddToCart(){
    addToCart(product)
  }
  return (
    <React.Fragment>
      <Title text="NEW ARRIVALS"/>
      <div className="container">
        <div className="content">
          <div className="left-content">
            <div className="heading">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
            <h3 className='price'>${product.price} <span className='discounted'>${product.discount}</span></h3>
            <div className="buttons">
              <CustomButton text="Discover" light={true} />
              <CustomButton text="ADD TO CART" light={false} onClick={handleAddToCart} />
            </div>
          </div>
          <div className="right-content">
            <img src={chairImg} alt="chair" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroSection
