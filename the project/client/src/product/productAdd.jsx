import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";


const ProductAdd=()=>{
    const [p_name,setP_name]=useState("")
    const [price,setPrice]=useState()
    const [image,setImage]=useState()
     const [score,setScore]=useState()
     const [status,setStatus]=useState("") 
     const [active,setActive]=useState() 
     const navigate = useNavigate()
    const submitForm=async(e)=>{ 
        e.preventDefault()
        try{
        const {data} = await axios.post('http://localhost:6543/api/product',{p_name:p_name,price:price,score:score,status:status,active:active,image:image})
          navigate('/product')
        }
        catch(error){
            console.log(error);
        }   
    }
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    // const footer = (
    //     <>
    //         <Button label="Save" icon="pi pi-check" />
    //         <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
    //     </>
    // );
    const [selectedStatus, setSelectedStatus] = useState(null);
    const statuss = [
        { name: 'parve', code: 'NY' },
        { name: 'chalavi', code: 'kY'}
    ];
    const [selectedScor, setSelectedScor] = useState(null);
    const scores = [
        { name: '1' },
        { name: '2'},
        { name: '3' },
        { name: '4'},
        { name: '5' }
    ];
    return(
        <>
        <img className="reka" src={"he.jpg"}></img>
        <br/><br/><br/> <br/> <br/> <br/> <br/>
        <div className="card flex justify-content-center">
            <Card title="Advanced Card" subTitle="Card subtitle"  header={header} className="md:w-25rem">
            <form onSubmit={submitForm}>
            <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="name"  onChange={(e) => setP_name(e.target.value)} />
                <label for="name">name</label>
            </FloatLabel>
        </div><br/>
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="price"  onChange={(e) =>setPrice(e.target.value)} />
                <label for="price">Price</label>
            </FloatLabel>
        </div><br/>
       

            {/* <input placeholder="add name" 
            onChange={(e) =>setP_name(e.target.value)}></input> */}
            {/* <input  placeholder="add price" 
            onChange={(e) =>setPrice(e.target.value)}></input> */}
            <input  placeholder="add score" 
            onChange={(e) =>setScore(e.target.value)}></input><br/>
             {/* <div className="card flex justify-content-center">
            <Dropdown value={selectedStatus}  onChange={(e) =>setStatus(e.target.value)} options={statuss} optionLabel="name" 
                placeholder="Select a status" className="w-full md:w-14rem" />
        </div><br/> */}
        {/* <div className="card flex justify-content-center">
            <Dropdown value={selectedScor}  onChange={(e) =>  setScore(e.target.value)} options={scores} optionLabel="name" 
                placeholder="Select a score" className="w-full md:w-14rem" />
        </div><br/> */}
         <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="active"    onChange={(e) =>setActive(e.target.value)} />
                <label for="active">active</label>
            </FloatLabel>
        </div><br/>
            <input  placeholder="add status" 
            onChange={(e) =>setStatus(e.target.value)}></input>
            {/* <input  placeholder="add active" 
            onChange={(e) =>setActive(e.target.value)}></input> */}
             {/* <input  placeholder="add path of image" 
            onChange={(e) =>setImage(e.target.value)}/> */}
            <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="Image"   onChange={(e) =>setImage(e.target.value)} />
                <label for="Image">Image</label>
            </FloatLabel>
        </div><br/>
            <button type="submit">add</button>
            <div className="card flex justify-content-center">
            <Button label="Submit" type="submit" />
        </div>
        </form>
            </Card>
        </div>
       
        </>
    )
}
export default ProductAdd