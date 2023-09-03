import CustomButton from "../UI/CustomButton"
import "./Newsletter.css"
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter-container">
          <div className="heading">
            <h2>Join Our Newsletter</h2>
            <p>Subscribe todya for free and save 10% <br /> on your first purchase.</p>
          </div>
          <div className="subscribe-btn">
            <input type="text" />
            <hr />
            <CustomButton light={false} text="SUBSCRIBE"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
