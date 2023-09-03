import "./Collection.css";
import SingleCard from "../UI/SingleCard";
import TableImg from "../../assets/table1.png"
import SofaImg from "../../assets/sofasingle.png"
import LampImg from "../../assets/lampsingle.png"
import ChairImg from "../../assets/chairsingle.png"
import Title from "../UI/Title";


const Collection = () => {
  return (
    <div className="collection">
      <Title text="COLLECTION"/>
      <div className="collection-container">
        <SingleCard 
          heading="Table"
          image={TableImg}
          buttonText="Discover"
          to="/table"
        />
        <SingleCard 
           heading="lamps"
           image={LampImg}
           buttonText="Discover"
           to="/lamps"
        />
        <SingleCard 
           heading="chair"
           image={ChairImg}
           buttonText="Discover"
           to="/chair"
        />
        <SingleCard 
           heading="sofa"
           image={SofaImg}
           buttonText="Discover"
           to="/sofa"
        />
      </div>
      
    </div>
  )
}

export default Collection
