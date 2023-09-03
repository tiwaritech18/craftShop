import { Fragment } from "react";
import  ReactDOM  from "react-dom";
import "./CartModal.css";

const Backdrop = ({onClose}) => {
  return <div className="backdrop" onClick={onClose}>

  </div>
}
const ModalOverlay = ({children}) => {
  return <div className="modal">
      <div className="content">{children}
      </div>
    </div>
}

const portalElement=document.getElementById('overlays');

const CartModal = ({onCloseClick}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onCloseClick}/>,portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay></ModalOverlay>,portalElement
      )}
    </Fragment>
  )
}

export default CartModal

