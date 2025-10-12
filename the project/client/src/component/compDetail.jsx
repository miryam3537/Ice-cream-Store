import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import React from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const CompDetail = () => {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(true);
    const { id } = useParams()
    const [ID, setID] = useState(id)
    const [res, setRes] = useState({})

    const pro = async () => {
        const { data } = await axios.get(`http://localhost:6543/api/product/${id}`)
        setRes(data)
        console.log(data.image,"data");
       
    }

    useEffect(() => {
        pro();
        
    }, [ID])
    return (
        <>
        <div className="card flex justify-content-center">
            <Dialog header="about..." visible={visible} style={{ width: '26vw' }} 
            onHide={() => {
                if (!visible) 
            setVisible(false);
           navigate("/prod")
      
         }}>
                <Button icon="pi pi-heart" rounded outlined severity="danger" aria-label="Favorite" /><br/>
               <div className="about">
               <Button className="zuztt" icon="pi pi-shopping-cart" rounded outlined severity="danger" onClick={()=>{navigate(`/component/compAddToCart/${res._id}`)}}  ></Button>
               <h1 className=" sm:w-16rem xl:w-10rem  block xl:block mx-auto  "></h1>
                <h1 className=" sm:w-16rem xl:w-10rem  block xl:block mx-auto ">{res.p_name}<br /></h1>
                <h2 className=" sm:w-16rem xl:w-10rem  block xl:block mx-auto ">{res.status}<br /></h2>
                <h1  className="   sm:w-16rem xl:w-10rem  block xl:block mx-auto ">${res.price}</h1><br />

                <img  src={`/${res.image}`} height={"250px"} width={"450px"}></img>
                
            </div> 
            </Dialog>
        </div>
           
        </>
    )
}
export default CompDetail

{/* <Link to={'/prod'}> */}