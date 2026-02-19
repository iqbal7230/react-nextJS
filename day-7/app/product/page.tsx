"use client"

import { useEffect, useReducer, useState } from "react";

type product ={
    id:number;
    title:string;
   
}
type state = {
    products:product[];
    loading:boolean;
 
}
type Action =|{type:"FETCH_START"} | {type:"FETCH_SUCCESS",payload:product[]} 
|{type:"ADD_PRODUCT",payload:product}
|{type:"DELETE_PRODUCT",payload:number}

const intialState:state ={
    products:[],
    loading:false,
    
}
function reducer(state:state,action:Action){
    switch(action.type){
        case "FETCH_START":
            return {...state,loading:true};
        case "ADD_PRODUCT":
            return {...state,products:[...state.products,action.payload]};
        case "DELETE_PRODUCT":
            return {...state,products:state.products.filter((product) => product.id !== action.payload)};
        case "FETCH_SUCCESS":
            return {...state,loading:false,products:action.payload};
        default:
            return state;
    }
}
async function getProducts(){
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
}

export default function ProductPage(){
    // const products = await getProducts();
    const [title,setTitle] = useState("");
    const [state,dispatch] = useReducer(reducer,intialState);
    
    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({type:"FETCH_START"});
            const data = await getProducts();
            dispatch({type:"FETCH_SUCCESS",payload:data.products});
        };
        fetchProducts();
    },[]);
    const addProduct = () => {
        dispatch({type:"ADD_PRODUCT",payload:{id:Date.now(),title}});
        setTitle("");
    }   
    if(state.loading){
        return <div>Loading...</div>;
    }   
    return (
        <div>
             <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {state.loading && <p>Loading...</p>}

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add product"
        />
        <button
          onClick={addProduct}
          className="bg-blue-500 text-white px-4"
        >
          Add
        </button>
      </div>

      <ul>
        {state.products.map((product) => (
          <li key={product.id} className="flex justify-between mb-2">
            {product.title}
            <button
              onClick={() =>
                dispatch({ type: "DELETE_PRODUCT", payload: product.id })
              }
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
        </div>
    );
}
