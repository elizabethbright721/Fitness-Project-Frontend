import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

export default function ProductNewForm(){
    let navigate = useNavigate();

    const addProduct = (newProduct) => {
      axios
        .post(`${API}/fitness`, newProduct)
        .then(
          (result) => {
            navigate(`/fitness/${result.data.id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const [product, setProduct] = useState({
      name: "",
      image: "",
      description: "",
      cost: "",
      category: "",
      benefit: "",
      benefit_two: "",
      benefit_three: "",
      is_popular: false,
    });
  
    const handleTextChange = (event) => {
      setProduct({ ...product, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setProduct({ ...product, is_popular: !product.is_popular });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addProduct(product);
    };
  
  
  return (
      <div className="">
         <form className="w-full max-w-lg ml-8" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">         
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                        Name:
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="name"
                        value={product.name}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name of product"
                        required
                    />
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="age">Image:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="image"
            type="text"
            pattern="http[s]*://.+"
            required
            value={product.image}
            placeholder="https://"
            onChange={handleTextChange}
          />
          
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="image">Cost:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="cost"
            type="decimal"
            min="0"
            value={product.cost}
            onChange={handleTextChange}
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="fit_category">Category:</label>
          <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="category"
            type="text"
            name="fit_category"
            value={product.category}
            onChange={handleTextChange}
            
          >
            <option>Select One</option>
            <option>Weight Management</option>
            <option>Full Body Nutrition</option>
            <option>Energy & Fitness</option>
            <option>Women Health</option>
          </select>
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_weight">Benefit:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="benefit"
            type="text"
            name="benefit"
            required
            value={product.benefit}
            onChange={handleTextChange}
          />
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_weight">Second Benefit:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="benefit_two"
            type="text"
            name="benefit_two"
            required
            value={product.benefit_two}
            onChange={handleTextChange}
          />
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_weight">Third Benefit:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="benefit_three"
            type="text"
            name="benefit_three"
            required
            value={product.benefit_three}
            onChange={handleTextChange}
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_weight">Popular:</label>
          <input className="bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="popular"
            type="checkbox"
            checked={product.popular}
            onChange={handleCheckboxChange}
          />
          <br />
          <br />
  
          <input type="submit" className="px-4 py-2 text-sm font-medium text-dk-blue bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-dk-blue focus:z-10 focus:ring-2 focus:ring-lt-blue focus:text-dk-blue" />
          <Link to={`/`}><button type="button" className="px-4 py-2 text-sm font-medium text-dk-blue bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-dk-blue focus:z-10 focus:ring-2 focus:ring-lt-blue focus:text-dk-blue">
            Back
        </button></Link>
        </div>
          </div>
        </form>
        <div class="inline-flex rounded-md shadow-sm" role="group">
        
        </div>
      </div>
    );
  }