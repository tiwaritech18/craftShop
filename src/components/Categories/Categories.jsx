import { Outlet } from "react-router-dom"
import CategoriesHeader from "./CategoriesHeader"

const Categories = () => {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  )
}

export default Categories
