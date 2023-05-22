import { Link } from "react-router-dom";
import { useState } from "react"

export default function Product ({ product }){
   const [toggle, setToggle] = useState(false);


   return (
       
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4 relative">
        <button onClick={() => setToggle(!toggle)} id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
        {toggle && (
        <div id="dropdown" className="z-10 absolute top-14 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to={`/fitness/${product.id}`}>Benefits</Link></span>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Order Now!</a>
            </li>
            </ul>
        </div>
        )}
    </div>
    <div className="flex flex-col items-center pb-20 mx-6 ">
        <img className="p-w-48 h-48 mb-1 rounded-full shadow-lg" src={product.image} alt={product.name}/>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">{product.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{product.category}</span>
         <p>{product.rating}</p>
        
    </div>
</div>

            
    );
}

