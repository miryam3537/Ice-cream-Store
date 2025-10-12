import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const Logout=(e)=>{
    const navigate=useNavigate()
    const pro1 = async () => {   
    localStorage.clear()
    navigate('/')
    }
useEffect(() => {
        pro1();
        
    }, [])

}
export default  Logout