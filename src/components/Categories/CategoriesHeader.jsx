import { useState } from "react"
import { Link } from "react-router-dom"

const CategoriesHeader = () => {
  const [btnName, setBtnName] = useState("All")
  const handleBtnName = () =>{
    setBtnName(event);
  }
  return (
    <div className="container">
      <div className="catego-header">
        <h3>{btnName}</h3>
        <div className="filter-btns">
          <Link to="all" onClick={() => handleBtnName("all")}>
            <button>
              All
            </button>
          </Link>
          <Link to="sofa" onClick={() => handleBtnName("sofa")}>
            <button>
              Sofa
            </button>
          </Link>
          <Link to="lamps" onClick={() => handleBtnName("lamps")}>
            <button>
              Lamps
            </button>
          </Link>
          <Link to="chair" onClick={() => handleBtnName("chair")}>
            <button>
              Chair
            </button>
          </Link>
          <Link to="table" onClick={() => handleBtnName("table")}>
            <button>
              Table
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default CategoriesHeader
