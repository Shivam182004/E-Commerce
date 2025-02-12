import { useState } from "react";
import { FaSearch, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"


const user = {
    _id:"fgf",
    role:"admin"
};
const Header = () => {
    const [isOpen , setIsOpen] = useState<boolean>(false);
  return (
    <nav className="header">
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}><FaSearch/></Link>
        <Link to={"/cart"}><FaShoppingCart/></Link>
       {
        user?._id ? (
        <>
        <button onClick={()=>setIsOpen((prev) => !prev)}><FaUser/></button>
        <dialog open={isOpen}>
            <div>
            {user.role === "admin" && 
            (<Link to={"/admin/dashboard"}>Admin</Link>)
            }

        <Link to={"/orders"}>Orders</Link>
        <button>
        <Link to={"/signOut"}><FaSignOutAlt/></Link>
        </button>
        </div>

        </dialog>
        </>
        ) :  <Link to={"/login"}><FaSignInAlt/></Link>
       }
    </nav>
  )
}

export default Header