import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const Register = () => {
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState("");
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()
    const toRegister = async (e) => {
        e.preventDefault()
        try {
            const newUser = {
                username, password, name, phone, email
            }
            await axios.post('http://localhost:6543/api/auth/register', newUser).then(res => {
                console.log(res, "res");
                navigate('/login')
            });
        }
        catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred. Please try again.");
            }
            console.log(error);
        }
    };
    return (
        <>
        <img className="reka" src={"kg.jpg"}></img>
        <div className=" card flex justify-content-center ">
            <Dialog  header="to register..." visible={visible} style={{ width: '26vw' }} 
            onHide={() => {
                if (!visible) 
            setVisible(false);
            navigate('/home')
        }}>
           
            {error && <div>{error}</div>}
            <form className="reg" onSubmit={toRegister}>
            <div className=" card  flex justify-content-center">
            <FloatLabel >
            <InputText id=" username"  onChange={(e) => setUsername(e.target.value)} />
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
            <div className="card flex justify-content-center">
        <FloatLabel>
            <InputText id="name"  onChange={(e) => setName(e.target.value)} />
                <label for="name" >
                <i className="pi pi-android"></i>name      
                </label>
            </FloatLabel>
            </div><br/>
            <div className="card flex justify-content-center">
        <FloatLabel>
            <InputText id="email"  onChange={(e) => setEmail(e.target.value)} />
                <label for="email" >  <i className="pi pi-at"></i>email      
               </label>
            </FloatLabel>
            </div><br/>
            <div className="card flex justify-content-center">
        <FloatLabel>
            <InputText id="phone"  onChange={(e) => setPhone(e.target.value)} />
                <label for="phone" >
                <i className="pi pi-phone"></i>phone      
                </label>
            </FloatLabel>
            </div><br/>
                <div className="card flex justify-content-center">
            <Button className="red"  type="submit" disabled={username === ""} label="Reghister" />
        </div>          
            </form>
              </Dialog>
              </div>
        </>
    )

}
export default Register