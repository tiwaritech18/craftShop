import {Link} from "react-router-dom";
import "./Productlisting.css"
import { AllData } from '../AllData';

const ProductListing = () => {
  const filteredItems = AllData.filter((item) => item.id >= 12)
  return (
    <div className="product-list-container">
      <div className='product-listing'>
        {filteredItems.map(product => (
         <div key={product.id} className="product-link">
           <Link  to={`/product/${product.id}`}>
             <div className="product">
               <img src={product.img} alt={product.desc} />
               <div className="product-heading">
                 <h2>{product.name}</h2>
                 <p>{product.description}</p>
                 <h3 className='price'>{product.price}</h3>
               </div>
             </div>
           </Link>
         </div>
        ))}
        
      </div>
    </div>
  )
}

export default ProductListing
