import BannerImg from "../../assets/bannerImg.jpg"
import CustomButton from '../UI/CustomButton'
import "./Banner.css"
import Title from "../UI/Title"

const Banner = ({title, desc, heading}) => {
  return (
    
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-left-content">
            <img className="banner-img" src={BannerImg} alt="banner img" />
          </div>
          <div className="banner-right-content">
             <Title text="RECENT POSTS" />
           <div className="heading">
            <p>{desc}</p>
            <h2>{heading}</h2>
           </div>
           <CustomButton text="Discover" light="true" />
          </div>
        </div>
      </div>
  )
}

export default Banner
