import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
// import React from 'react'; 
// import { Message } from 'primereact/message';

const ProdUpDate=()=>{
    const [p_name,setP_name]=useState("")
    const [price,setPrice]=useState()
     const [score,setScore]=useState()
     const [status,setStatus]=useState("") 
     const [active,setActive]=useState() 
     const [image,setImage]=useState() 
     const [response,setResponse]=useState() 
     const navigate = useNavigate()
     const prod=useLocation()
     const {id}=useParams()
    
  
     const submitForm=async(e)=>{
        e.preventDefault()
        try{
           
            console.log(p_name)
        const {data} = await axios.put(`http://localhost:6543/api/product/${id}`,{p_name:p_name,price:price,score:score,status:status, active: active,image:image})
         navigate('/product')
        // setProduct(data)
      
        }
        catch(error){
            console.log(error);
        }   
    }

    const getProdById=async(e)=>{
        // e.preventDefault()
        try{
        const {data} = await axios.get(`http://localhost:6543/api/product/${id}`)
        setP_name(data.p_name)
        setPrice(data.price)
        setScore(data.score)
        setStatus(data.status)
        setActive(data.active)
        setImage(data.image)
        }
        catch(error){
            console.log(error);
        }   
    }
       useEffect(() =>{
        getProdById()
    },[])
   
    return(
        <>
        <form onSubmit={submitForm}>
            <input value={p_name} 
            onChange={(e) =>setP_name(e.target.value)}></input>
            <input  value={price} 
            onChange={(e) =>setPrice(e.target.value)}></input>
            <input   value={score} 
            onChange={(e) =>setScore(e.target.value)}></input>
            <input   value={status} 
            onChange={(e) =>setStatus(e.target.value)}></input>
            <input  value={active} 
            onChange={(e) =>setActive(e.target.value)}></input>
             <input  value={image} 
            onChange={(e) =>setImage(e.target.value)}/>
            <button type="submit">upDate</button>
            {/* <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
            <Message severity="success" text="Success Message" /></div> */}
        </form>
        </>
    )
}
export default ProdUpDate