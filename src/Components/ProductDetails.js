import { useState, useEffect } from "react";
import { useParams, Link, useNavigate} from "react-router-dom"
import axios from "axios";
import Disclaimer from "../Pages/Disclaimer";


const API = process.env.REACT_APP_API_URL;

export default function ProductDetails(){
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/fitness/${id}`).then ((res) => {
            setProduct(res.data);
        }).catch((e) => {
            console.warn("catch:", e);
        })
    }, [id]);

    const handleDelete = () => {
        alert("Are you sure you want to delete this product?")
        deleteProduct();
    };

    const deleteProduct = () => {
        axios.delete(`${API}/fitness/${id}`)
        .then(() => {
            navigate("/")
        })
        .catch((e) => {
            console.warn("catch:", e);
        })
    };

    return(
        
<div className="flex max-w-sm items-center">
    <img className="p-16" src={product.image} alt="product image" />
    <div className="px-5 pb-5">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{product.name}</h3>
        <h5 className="mt-4 text-l font-medium text-gray-500">{product.description}</h5>
            <div className="flex items-center mt-2.5 mb-5">
                <p>{product.rating}</p>
                {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span> */}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">${product.cost}</span>
                    {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a> */}
                </div>
        <h5 className="mt-4 text-l font-medium text-gray-500">Benefits</h5>
        {/* <!-- List --> */}
        <ul role="list" className="space-y-4 my-5">
            <li className="flex space-x-2">
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-dk-blue dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{product.benefit}</span>
            </li> 
            {!product.benefit_two ? null : 
            <li className="flex space-x-2">
                {/* <!-- Icon --> */}
               
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-dk-blue dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{product.benefit_two}</span>
            </li>}
            {!product.benefit_three ? null :
            <li className="flex space-x-2">
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 -dk-blue dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{product.benefit_three}</span>
            </li>}
            
        </ul>
       
        <div className="inline-flex rounded-md shadow-sm" role="group">
        <Link to={`/`}><button type="button" className="px-4 py-2 text-sm font-medium text-dk-blue bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Back
        </button></Link>
        <Link to={`/fitness/${product.id}/edit`}><button type="button" className="px-4 py-2 text-sm font-medium text-dk-blue bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Edit
        </button></Link>
        <button onClick={handleDelete}type="button" className="px-4 py-2 text-sm font-medium text-dk-blue bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Delete
        </button>
        </div>
        

    </div>


</div>
    
      

     


    );
}