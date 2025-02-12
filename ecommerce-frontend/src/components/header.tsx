import { useState } from "react";
import { FaSearch, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"


const user = {
    _id:"fgf",
    role:"admin"
};
const Header = () => {
    const [isOpen , setIsOpen] = useState<boolean>(false);
    const logOutHandler = () => {
      setIsOpen(false);
    };
    
  return (
    <nav className="header">
        <Link  onClick={()=>setIsOpen(false)} to={"/"}>Home</Link>
        <Link onClick={()=>setIsOpen(false)} to={"/search"}><FaSearch/></Link>
        <Link onClick={()=>setIsOpen(false)} to={"/cart"}><FaShoppingCart/></Link>
       {
        user?._id ? (
        <>
        <button onClick={()=>setIsOpen((prev) => !prev)}><FaUser/></button>
        <dialog open={isOpen}>
            <div>
            {user.role === "admin" && 
            (<Link to={"/admin/dashboard"}>Admin</Link>)
            }

        <Link onClick={()=>setIsOpen(false)} to={"/orders"}>Orders</Link>
        <button>
        <Link onClick={()=>setIsOpen(false)} to={"/signOut"}><FaSignOutAlt/></Link>
        </button>
        </div>

        </dialog>
        </>
        ) :  <Link onClick={logOutHandler} to={"/login"}><FaSignInAlt/></Link>
       }
    </nav>
  )
}

export default Header