import React from 'react'
import "./Navbar.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useMyContext } from '../../MyContext';
import { Link } from 'react-router-dom';

const Navbar = ({onClicked}) => {

  const { cartItems , OpenCart} = useMyContext();
  const cartItemsNum = cartItems.length;





  return (
    <React.Fragment>
      <nav>
        <div className="brand">
          <h1>stile <span>.</span></h1>
        </div>
        <div className="navbar-links">
          <ul>
          <li>
          <Link to="product/1">Product Detail</Link>

        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
          </ul>
        </div>

        <div className="account">
          <PermIdentityIcon />
          <div className="cart-icon" onClick={onClicked}>
            <ShoppingBagIcon />
            {cartItemsNum === 0 ? <p className='hidden'>hidden</p> : <p className='item-amount'>{cartItemsNum}</p> }
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
