import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

export default function ProductEditForm(){
    let {id} = useParams();
    let navigate = useNavigate();
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

    const updateProduct = (updatedProduct) => {
      axios
        .put(`${API}/fitness/${id}`, updatedProduct)
        .then(
          (result) => {
            navigate(`/fitness/${id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    
  
    const handleTextChange = (event) => {
      setProduct({ ...product, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setProduct({ ...product, is_popular: !product.is_popular });
    };

    useEffect(() => {
        axios.get(`${API}/fitness/${id}`).then(
        (res) => setProduct(res.data),
        (error) => navigate(`/not-found`)
        )
    }, [id, navigate])
  
    const handleSubmit = (event) => {
      event.preventDefault();
      updateProduct(product, id);
    };
  
  
  return (
      <div className="flex">
        <img className="p-8 rounded-t-lg" src={product.image} />
        
        <form className="w-full max-w-lg ml-1" onSubmit={handleSubmit}>
            <div className="-mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">         
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                        Name:
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-dk-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="name"
                        value={product.name}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name of product"
                        required
                    />
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="age">Image:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-dk-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="image"
            type="text"
            pattern="http[s]*://.+"
            required
            value={product.image}
            placeholder="https://"
            onChange={handleTextChange}
          />
          
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="image">Cost:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-dk-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="cost"
            type="decimal"
            min="0"
            value={product.cost}
            onChange={handleTextChange}
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="fit_category">Category:</label>
          <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-dk-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="category"
            type="text"
            name="fit_category"
            value={product.category}
            onChange={handleTextChange}
          >
            <option>Weight Management</option>
            <option>Full Body Nutrition</option>
            <option>Energy & Fitness</option>
            <option>Women Health</option>
          </select>
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_weight">Benefit:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-dk-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="benefit"
            type="text"
            name="benefit"
            required
            value={product.benefit}
            onChange={handleTextChange}
          />
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_weight">Second Benefit:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-dk-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="benefit_two"
            type="text"
            name="benefit_two"
         
            value={product.benefit_two}
            onChange={handleTextChange}
          />
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_weight">Third Benefit:</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-dk-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="benefit_three"
            type="text"
            name="benefit_three"
            
            value={product.benefit_three}
            onChange={handleTextChange}
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_weight">Popular:</label>
          <input className="bg-gray-200 text-gray-700 border border-dk-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="popular"
            type="checkbox"
            checked={product.popular}
            onChange={handleCheckboxChange}
          />
          <br />
  
          <input type="submit" className="bg-dk-blue hover:bg-lt-blue text-white font-bold py-2 px-4 rounded" />
          </div>
          </div> 
          <Link to={`/`}>
          <button className="bg-dk-blue hover:bg-lt-blue text-white font-bold py-2 px-4 rounded">Go back!</button>
        </Link>
        </form>
       
      </div>
    );
  }
  
