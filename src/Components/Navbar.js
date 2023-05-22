import Fit_Logo from "../Fit_Logo.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    return(
        <nav className="flex items-center justify-between flex-wrap bg-dk-blue p-2">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/" ><img src={Fit_Logo} className="fill-current h-50 w-50 mr-2" width="200" height="100" viewBox="0 0 54 54" /></Link> 
                <span className="font-semibold text-pale-pink text-3xl tracking-tight">Live A Better Life 24-7</span>  
            </div>
            
            <div className="block lg:hidden">
                <button onClick={() => setToggle(!toggle)} className="flex items-center px-3 py-2 border rounded text-pale-pink border-pale-pink hover:text-white hover:border-lt-blue">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            {toggle ||  
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/About" className="block mt-4 lg:inline-block lg:mt-0 text-pale-pink hover:text-lt-blue mr-6">
                        About
                    </Link>
                    <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-pale-pink hover:text-lt-blue mr-6">
                        Diet
                    </Link>
                    <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-pale-pink hover:text-lt-blue">
                        Exercises
                    </Link>
                </div>
                <div>
                    <Link to="/fitness/new" className="inline-block text-sm px-4 py-2 leading-none border rounded text-pale-pink border-pale-pink hover:border-transparent hover:text-dk-blue hover:bg-lt-blue mt-4 lg:mt-0">Add Product</Link>
                </div>
            </div>
            }
    </nav>
    );
}
    
export default NavBar;