// import {Outlet} from "react-router-dom"
// import React from 'react'; 
// import { Menubar } from 'primereact/menubar';
// import { useDispatch,useSelector } from 'react-redux';
// const Layout=()=>{
//      const State=useSelector((x)=>x.loginSlice)   
//      console.log(State.name);
//      console.log(State,"State");
//     const items = [
//         {
//             label:'HOME',
//             icon: 'pi pi-cart-arrow-down',
//            url:'http://localhost:3001/home'
//         },
//         {
//             label: 'REGISTER',
//             icon: 'pi pi-user-plus',
//            url:'http://localhost:3001/Register'
//         },
//         {
//             label: 'LOGIN',
//             icon: 'pi pi-sign-in',
//             items: [
//                 {
//                     label: 'ENTER <<',
//                     url:'http://localhost:3001/Login'
//                 },
//                 {
//                     label: 'LOGOUT >>',
//                     url:'http://localhost:3001/Logout'
//                 }
//             ]
//         },{
//             label: 'YOUR BASKET',
//             icon: 'pi pi-cart-arrow-down',
//            url:'http://localhost:3001/compCart'
//         },
//         {
//             label: 'OUR PRODUCTS',
//             icon: 'pi pi-tag',
//             items: [
//                 {
//                     label: 'ADMIN',
//                     url:'http://localhost:3001/product'
//                 },
//                 {
//                     label: 'PRODUCTS',
//                     url:'http://localhost:3001/prod'
//                 }
//             ]
//         }
//     ];
//     return(
//     <>
//     <div>
//             <header>
//           {console.log(State)} 
//             <div className=" hc card">
//             <div> hi  {State.name}</div>
//             <Menubar  model={items} /> </div>
//             </header>
//             <main>
//                 <Outlet/>
//             </main>
//         </div> 
//         <footer><div className="title">strobary&banna</div></footer> 
//     </>    
//     )
// }
// export default Layout
// import { Outlet } from "react-router-dom";
// import React from 'react'; 
// import { Menubar } from 'primereact/menubar';
// import { useDispatch, useSelector } from 'react-redux';
// import { change } from "../Store/loginSlice";
// const Layout = () => {
//     const state = useSelector((x) => x.loginSlice);   
//     const dispatch = useDispatch(); // Get the dispatch function

//     // Example function to simulate user login
//     const handleLogin = () => {
//         dispatch(change({ name: "User's Name" })); // Dispatch the change action with the user's name
//     };

//     const items = [
//         {
//             label: 'HOME',
//             icon: 'pi pi-cart-arrow-down',
//             url: 'http://localhost:3001/home',
//         },
//         {
//             label: 'REGISTER',
//             icon: 'pi pi-user-plus',
//             url: 'http://localhost:3001/Register',
//         },
//         {
//             label: 'LOGIN',
//             icon: 'pi pi-sign-in',
//             items: [
//                 {
//                     label: 'ENTER <<',
//                     url: 'http://localhost:3001/Login',
//                     command: handleLogin, // Simulate login on click
//                 },
//                 {
//                     label: 'LOGOUT >>',
//                     url: 'http://localhost:3001/Logout',
//                 },
//             ],
//         },
//         {
//             label: 'YOUR BASKET',
//             icon: 'pi pi-cart-arrow-down',
//             url: 'http://localhost:3001/compCart',
//         },
//         {
//             label: 'OUR PRODUCTS',
//             icon: 'pi pi-tag',
//             items: [
//                 {
//                     label: 'ADMIN',
//                     url: 'http://localhost:3001/product',
//                 },
//                 {
//                     label: 'PRODUCTS',
//                     url: 'http://localhost:3001/prod',
//                 },
//             ],
//         },
//     ];

//     return (
//         <>
//             <div>
//                 <header>
//                     <div className="hc card">
//                         <div>Hi {state.name}</div> {/* Display the user's name */}
//                         <Menubar model={items} />
//                     </div>
//                 </header>
//                 <main>
//                     <Outlet />
//                 </main>
//             </div>
//             <footer>
//                 <div className="title">strawberry&banna</div>
//             </footer>
//         </>
//     );
// };

// export default Layout;



// import { Outlet, Link } from "react-router-dom"; // Import Link from react-router-dom
// import React from 'react'; 
// import { Menubar } from 'primereact/menubar';
// import { useDispatch, useSelector } from 'react-redux';
// import { change } from "../Store/loginSlice";

// const Layout = () => {
//     const state = useSelector((x) => x.loginSlice);   
//     const dispatch = useDispatch(); // Get the dispatch function

//     // Example function to simulate user login
//     const handleLogin = () => {
//         dispatch(change({ name: "User's Name" })); // Dispatch the change action with the user's name
//     };

//     const items = [
//         {
//             label: 'HOME',
//             icon: 'pi pi-cart-arrow-down',
//             command: () => {}, // No command needed for Link
//             // Use Link in the Menubar
//             template: () => <Link to="/home">HOME</Link>,
//         },
//         {
//             label: 'REGISTER',
//             icon: 'pi pi-user-plus',
//             command: () => {},
//             template: () => <Link to="/Register">REGISTER</Link>,
//         },
//         {
//             label: 'LOGIN',
//             icon: 'pi pi-sign-in',
//             items: [
//                 {
//                     label: 'ENTER <<',
//                     command: () => {
//                         handleLogin(); // Simulate login on click
//                         // Navigate to Login page
//                         // Use Link for navigation
//                         window.location.href = '/Login'; // Redirect after login
//                     },
//                 },
//                 {
//                     label: 'LOGOUT >>',
//                     command: () => { /* Handle logout logic */ },
//                 },
//             ],
//         },
//         {
//             label: 'YOUR BASKET',
//             icon: 'pi pi-cart-arrow-down',
//             command: () => {},
//             template: () => <Link to="/compCart">YOUR BASKET</Link>,
//         },
//         {
//             label: 'OUR PRODUCTS',
//             icon: 'pi pi-tag',
//             items: [
//                 {
//                     label: 'ADMIN',
//                     command: () => {},
//                     template: () => <Link to="/product">ADMIN</Link>,
//                 },
//                 {
//                     label: 'PRODUCTS',
//                     command: () => {},
//                     template: () => <Link to="/prod">PRODUCTS</Link>,
//                 },
//             ],
//         },
//     ];

//     return (
//         <>
//             <div>
//                 <header>
//                     <div className="hc card">
//                         <div>Hi {state.name}</div> {/* Display the user's name */}
//                         <Menubar model={items} />
//                     </div>
//                 </header>
//                 <main>
//                     <Outlet />
//                 </main>
//             </div>
//             <footer>
//                 <div className="title">strawberry&banna</div>
//             </footer>
//         </>
//     );
// };

// export default Layout;
import { Outlet, Link } from "react-router-dom"; // Import Link from react-router-dom
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { useDispatch, useSelector } from 'react-redux';
import { change } from "../Store/loginSlice";

const Layout = () => {
    const state = useSelector((x) => x.loginSlice);   
    const dispatch = useDispatch(); // Get the dispatch function

    // Example function to simulate user login
    const handleLogin = () => {
        dispatch(change({ name: "User's Name" })); // Dispatch the change action with the user's name
    };


    const items = [
        {
            label: <Link to="/home" className="nav-link">HOME</Link>, // Use Link with custom class
            icon: 'pi pi-cart-arrow-down',
        },
        {
            label: <Link to="/Register" className="nav-link">REGISTER</Link>, // Use Link with custom class
            icon: 'pi pi-user-plus',
        },
        {
            label: 'LOGIN',
            icon: 'pi pi-sign-in',
            items: [
                {
                    label: 'ENTER <<',
                    command: () => {
                        handleLogin(); // Simulate login on click
                        // Navigate to Login page
                        window.location.href = '/Login'; // Redirect after login
                    },
                },
                {
                    label: 'LOGOUT >>',
                    command: () => { /* Handle logout logic */ },
                },
            ],
        },
        {
            label: <Link to="/compCart" className="nav-link">YOUR BASKET</Link>, // Use Link with custom class
            icon: 'pi pi-cart-arrow-down',
        },
        {
            label: 'OUR PRODUCTS',
            icon: 'pi pi-tag',
            items: [
                {
                    label: <Link to="/product" className="nav-link">ADMIN</Link>, // Use Link with custom class
                },
                {
                    label: <Link to="/prod" className="nav-link">PRODUCTS</Link>, // Use Link with custom class
                },
            ],
        },
    ];

    return (
        <>
            <div>
                <header className="hc">
                    <div className="hc card" >
                        <div>Hi {state.name}</div> {/* Display the user's name */}
                        <Menubar model={items} />
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer>
                <div className="title">strawberry&banna</div>
            </footer>
        </>
    );
};

export default Layout;