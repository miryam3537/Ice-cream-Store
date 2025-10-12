
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { Toast } from 'primereact/toast'; // Import Toast from PrimeReact
import { Message } from 'primereact/message'; // Import Message from PrimeReact

const CompAddToCart = () => {
    const [message, setMessage] = useState(null); // State to hold the message


    const navigate = useNavigate()
    const productId = useParams().id
  
  
    const token = localStorage.getItem("token")?localStorage.getItem("token"):[]
    const add = async () => { 
            // dispatch(addToCart(item));
            setMessage({ severity: 'success', detail: `${productId} has been added to your basket!` });

            // Automatically clear the message after 5 seconds
           
      
        try {
            setMessage({ severity: 'success', detail: ` has been added to your basket!` });
            setTimeout(() => {
                setMessage({ severity: 'success', detail: ` has been added to your basket!` });
            }, 800000); 
            const { data } = await axios.post('http://localhost:6543/api/cart', {
                productId: productId
            },
                { headers: { 'Authorization': `Bearer ${token}` } },)
         
        }
        catch (error) {
            // if (error.response.status == 401) {
                // alert("משתמש לא קיים")
            // }
            console.log(error);
        }
        navigate('/prod')
    }
    useEffect(() => {
        add()
    }, [])
    return (
        <>
                  <div>
            {message && (
                <Message 
                    severity={message.severity} 
                    text={message.detail} 
                    onClose={() => setMessage(null)} // Clear the message on close
                />
            )}
           
        </div>
        </>
    )

}
export default CompAddToCart