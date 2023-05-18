import Fit_Logo from "../Fit_Logo.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/" ><img src={Fit_Logo} className="fill-current h-50 w-50 mr-2" width="100" height="100" viewBox="0 0 54 54" /></Link> 
                <span className="font-semibold text-xl tracking-tight">Get Fit Together</span>
                
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-pink-400 border-pink-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/About" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-400 mr-6">
                        About
                    </Link>
                    <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-400 mr-6">
                        Diet
                    </Link>
                    <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-400">
                        Exercises
                    </Link>
                </div>
                <div>
                    <Link to="/fitness/new" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-pink-400 hover:bg-white mt-4 lg:mt-0">Add User</Link>
                </div>
            </div>
    </nav>
    );
}
    
export default NavBar;