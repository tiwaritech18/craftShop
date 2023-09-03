import { AllData } from "../AllData"
import { Link } from "react-router-dom"

const CategoriesItem = () => {

  return (
   <>
      <div className="grid-container">
        <div className="products-grid">
          {AllData.map((item) => (
            <div key={item.id} className="product normal">
              <Link 
                onClick={() => window.scrollTo(0, 0)}
                to={`/categories/product/${item.id}`}
                >
                 <div className="product-header">
                  <img src={item.img} alt="product1" />
                 </div>
                 <div className="product-details">
                  <p>{item.description}</p>
                  <h3>{item.price}$</h3>
                 </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
   </>
  )
}

export default CategoriesItem;
