import { Link } from "react-router-dom";
import "./SingleCard.css"
import CustomButton from "./CustomButton"

const SingleCard = ({heading,image,buttonText,to}) => {
  return (
    <div className="card">
          <Link to={to}>
              <div className="single-item">
                <img src={image} alt="" />
                <h3>{heading}</h3>
              <CustomButton light={true} text={buttonText}/>
              </div>
              
          </Link>
        </div>
  )
}

export default SingleCard
