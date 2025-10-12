import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import {useDispatch} from "react-redux"

import { change,change2 } from "../Store/loginSlice";
import { ColorPicker } from "primereact/colorpicker";
import { Dialog } from 'primereact/dialog';
const Login = () => {
    const [error, setError] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispach=useDispatch()
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate()
    const toLogin = async (e) => {
        e.preventDefault()
        
            await axios.post('http://localhost:6543/api/auth/login', { username: username, password: password })
                .then(response => {
                    localStorage.setItem("token",response.data.accesstoken)
                    console.log(response.data.userInfo.name);
                     dispach(change({name:response.data.userInfo.name}))

                }).catch(error=>{
                    alert("שם משתמש או סיסמה שגויים")
                    console.log(error);
                })
           
            navigate('/home')
    
    }
    return (
        <>
             <img className="reka" src={"kg.jpg"}></img>
             <div className=" card flex justify-content-center ">
            <Dialog  header="to enter..." visible={visible} style={{ width: '26vw' }} 
            onHide={() => {
                if (!visible) 
            setVisible(false);
            navigate('/home')
        }}>
            {error && <div>{error}</div>}
            <form action="Login">
            <div className="card flex justify-content-center">
            <FloatLabel>
            <InputText id="username"  onChange={(e) => setUsername(e.target.value)} />
                <label for="username" >
                <i className="pi pi-user"></i>Username      
                </label>
            </FloatLabel>
        </div><br/>
      
            <div className="card flex justify-content-center">
            <FloatLabel>
                <Password inputId="password"  onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password"> <i className="pi pi-eye-slash"></i>
                    Password</label>
            </FloatLabel>
        </div><br/>
              
                 <div  className="card flex justify-content-center">
            <Button className="red"onClick={(toLogin)} label="Login" />
        </div>
               
            </form>
            </Dialog>
              </div>
        </>
    )

}
export default Login