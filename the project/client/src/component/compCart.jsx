import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { change } from '../Store/loginSlice';
const CompCart = () => {
    const dispatch = useDispatch();
    const name = useSelector((x) => x.loginSlice.name); 
    const [cart, setCart] = useState([]);

    const handleLogin = (userName) => {
                dispatch(change({ name: userName })); 
            };
        
    
    const token = localStorage.getItem("token");
   
    const getFromCart = async () => {
        try {
            const res = await axios.get(`http://localhost:6543/api/cart`, {
                headers: { 'Authorization': `Bearer ${token}` },
            });
            setCart(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const deleteFromCart = async (pro) => {
        try {
            const header = { 'Authorization': `Bearer ${token}` };
            await axios.delete(`http://localhost:6543/api/cart/${pro._id}`, { headers: header });
            getFromCart();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFromCart();
    }, []);

    const itemTemplate = (item) => {
        return (
            
            <div className="flex flex-wrap p-2 align-items-center gap-3">
            <div> hi  {name}</div>
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={item.productId.image} alt={item.productId.p_name} />
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{item.productId.p_name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.productId.status}</span>
                    </div>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-star text-sm"></i>
                        <span>{item.productId.score}</span>
                    </div>
                </div>
                <div className="flex align-items-center gap-2">
                <Button  onClick={() => deleteFromCart(item)} icon="pi pi-times" rounded outlined severity="danger" aria-label="Cancel" />
                    {/* <button className=" pi pi-trash" onClick={() => deleteFromCart(item)}></button> */}
                </div>
            </div>
        );
    };
    return (
        <div className="card xl:flex xl:justify-content-center">
            {/* <h2>My Cart:</h2> */}
            <br/>
            <OrderList dataKey="_id" value={cart} onChange={(e) => setCart(e.value)} itemTemplate={itemTemplate} header="Products" filter filterBy="productId.p_name"></OrderList>
        </div>
    );
};
export default CompCart;
