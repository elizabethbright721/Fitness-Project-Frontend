import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

export default function UserNewForm(){
    let navigate = useNavigate();

    const addUser = (newUser) => {
      axios
        .post(`${API}/fitness`, newUser)
        .then(
          (result) => {
            navigate(`/fitness/${result.data.id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const [user, setUser] = useState({
      name: "",
      image: "",
      age: "",
      fit_category: "",
      start_weight: "",
      goal_weight: "",
      present_weight: ""
    });
  
    const handleTextChange = (event) => {
      setUser({ ...user, [event.target.id]: event.target.value });
    };
  
    // const handleCheckboxChange = () => {
    //   setUser({ ...user, is_trending: !footwear.is_trending });
    // };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addUser(user);
    };
  
  
  return (
      <div className="New">
         <form className="w-full max-w-lg ml-8" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">         
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                        Name:
                    </label>
                    <input className="appearance-none block w-full bg-pink-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="name"
                        value={user.name}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name of User"
                        required
                    />
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="age">Age:</label>
          <input className="appearance-none block w-full bg-pink-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="age"
            type="number"
            required
            min="0"
            value={user.age}
            onChange={handleTextChange}
          />
          
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="image">Image:</label>
          <input className="appearance-none block w-full bg-pink-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="image"
            type="text"
            value={user.image}
            onChange={handleTextChange}
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="fit_category">Category:</label>
          <select className="appearance-none block w-full bg-pink-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="fit_category"
            type="text"
            name="fit_category"
            value={user.fit_category}
            onChange={handleTextChange}
          >
            <option>Novice</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start_weight">Start Weight:</label>
          <input className="appearance-none block w-full bg-pink-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="start_weight"
            type="number"
            name="start_weight"
            min="0"
            required
            value={user.start_weight}
            onChange={handleTextChange}
          />
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="goal_weight">Goal Weight:</label>
          <input className="appearance-none block w-full bg-pink-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="goal_weight"
            type="number"
            name="goal_weight"
            min="0"
            required
            value={user.goal_weight}
            onChange={handleTextChange}
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="present_weight">Present Weight:</label>
          <input className="appearance-none block w-full bg-pink-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="present_weight"
            type="number"
            name="present_weight"
            min="0"
            required
            value={user.present_weight}
            onChange={handleTextChange}
          />
          <br />
  
          <input type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" />
          </div>
          </div>
        </form>
        <Link to={`/`}>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Go back!</button>
        </Link>
      </div>
    );
  }