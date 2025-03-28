 import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addView } from '../Store/viewSlice'
 
 function Products( {id,desc, image, name, category, sellingprice, price}) {

  const dispatch =  useDispatch()
  const navigate = useNavigate()


  const handleView = ()=>{
    dispatch(addView({id, image, name,category, desc, sellingprice, price}))
  }
   return (
       <div onClick={handleView} className=" w-80  flex bg-slate-200 shadow-lg rounded-xl flex-col hover:scale-105 duration-300 hover:shadow-2xl ">
       <img className="h-96 w-96 object-cover shadow-blue-400 rounded-lg" src={image}/>
          <div className=" flex flex-col p-3">
           <div className="px-4 py-3 w-80 ">
           <span className=" text-lg font-bold text-black capitalize block truncate "> {name}</span>
           <p className=" text-gray-600 font-semibold mr-3 upprecase text-sm ">{category} </p>
           <div className=" items-center gap-1 flex flex-col ">
             <p className="text-lg font-bold text-black my-1 "> {sellingprice}$</p>
             <del className=" text-lg font-bold text-black my-1 ">
                <p className=" text-lg text-red-500 ml-1  ">
                {price}$
                </p>
             </del>
           </div>
           </div>
           <Link to="/View" ><button className=" bg-blue-300 rounded-lg px-3 py-1 hover:bg-blue-400  text-2xl w-72"> View</button> </Link>
          </div>
       </div> 
   )
 }
 
 export default Products