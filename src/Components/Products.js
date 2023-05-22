import axios from "axios";
import { useState, useEffect} from "react";
import Product from "./Product.js";
import ProductCategory from "../Components/ProductCategory.js";
const API = process.env.REACT_APP_API_URL;

export default function Products(){
    const [products, setProducts] = useState([]);
    console.log(products)
    const [category, setActiveCategory] = useState("All Products")
    console.log(category)
    const productFilter = products.filter((product) => {
        if (category === "All Products") {
    return true;
  }
  if (product.category === category) {
    return true;
 } 
    return false;
});

    useEffect(() => {
        axios.get(`${API}/fitness`).then((res) => {
            setProducts(res.data)
        }).catch((e) => {
            console.warn("catch", e)
        })
        }, []);
    return (
       <div className="flex cols-2" > 
            <div className="">
                <ProductCategory products={products} setActiveCategory={setActiveCategory} category={category} />
            </div>
                <div className="m-4 grid grid-cols-4 gap-4">
                    {productFilter.map((product) => {
                        return <Product key={product.id} product={product}  />
                    })}
                </div>
              
            </div>
    )
}