import  {  useState } from 'react';
import { useParams } from 'react-router-dom';
import { AllData } from '../AllData';
import CustomButton from "../../UI/CustomButton"
import "./ProductDetail.css"
import Newsletter from '../Newsletter';
import Footer from '../Footer';
import ProductSupport from './ProductSupport';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RestoreIcon from '@mui/icons-material/Restore';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Title from "../../UI/Title";
import { useMyContext } from '../../MyContext';



const ProductDetail = () => {
  const { addToCart } = useMyContext();

  const { id } = useParams();
  console.log('productId', id);

  const product = AllData.find(product => product.id === parseInt(id));
  console.log('product:', product)

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);

    }
  }
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * product.price;
  }



  if (!product) {
    return ;
  }
  return (
    <>
    <div className="product-page-container">
      <div className='product-container'>
        <div className="product-img product">
          <img src={product.img} alt={`product ${product.name}`} />
      
        </div>
        <div className="product-description">
          <div className="heading">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${calcPrice(quantity)}</h3>
          </div>
          <div className="amount-buttons">
          <CustomButton light={true} text="-" onClick={decrease}></CustomButton>
          <span>{quantity}</span>
          <CustomButton light={true} text="+" onClick={increase}></CustomButton>
        </div><div className="buttons">
          <CustomButton light={false} text="ADD To CART" onClick={addToCart}/>
          <CustomButton light={true} text="BUY NOW"/>
        </div>
        </div>
      </div>
      <div className="product-specs">
        <Title text="Description"/>
        <div className="specs">
          <p>{product.specs}</p>
        </div>
      </div>
      <div className="support">
        <ProductSupport supportImg={<LocalShippingIcon />} text="Ships from Stile"/>
        <ProductSupport supportImg={<RestoreIcon />} text="Eligible for Return, Refund or Replacement within 30 days of receipt"/>
        <ProductSupport supportImg={<SupportAgentIcon />} text="Customer Support"/>
      </div>
    </div>
    <Newsletter />
    <Footer />
    </>
  )
}

export default ProductDetail;
