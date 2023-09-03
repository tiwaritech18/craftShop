import "./ProductDetail.css";

const ProductSupport = ({supportImg, text}) => {


  return (
    <>
      <div className="support-container ">
        <div className="support-head">
          <div className="support-icon">{supportImg}</div>
          <p>{text}</p>
        </div>
      </div>
        
    </>
  )
}

export default ProductSupport;
