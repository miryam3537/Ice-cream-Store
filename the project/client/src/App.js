import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeflex/primeflex.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a theme
import 'primereact/resources/primereact.min.css'; // PrimeReact core styles
import 'primeicons/primeicons.css'; // PrimeIcons
import { useSelector } from 'react-redux';

const LazyProduct = React.lazy(() => import('./product/productList'));
const LazyProd = React.lazy(() => import('./product/compProductUser'));
const LazyLogin = React.lazy(() => import('./component/compLogin'));
const LazyRegister = React.lazy(() => import('./component/compRegister'));
const LazyAdd = React.lazy(() => import('./product/productAdd'));
const LazyUpDate = React.lazy(() => import('./product/upDateProduct'));
const LazyDetail = React.lazy(() => import('./component/compDetail'));
const LazyAddToCart = React.lazy(() => import('./component/compAddToCart'));
const LazyCart = React.lazy(() => import('./component/compCart'));
const LazyLayout=React.lazy(()=> import('./common/Layout'))
const LazyLogout=React.lazy(()=> import('./common/Logout'))
const LazyHome=React.lazy(()=> import('./component/compHome'))

function App() {
  const state=useSelector((x)=>x.loginSlice)
  console.log(state);
  

  return (
    <div className="App">
      <nav>    
      </nav>
      <Routes>
        
       <Route path='/' element={<Suspense fallback={<h1>loading</h1>}><LazyLayout /></Suspense>} > 
        <Route path='/product/add' element={<Suspense fallback={<h1>loading</h1>}><LazyAdd /></Suspense>} />
        <Route path='/prod' element={<Suspense fallback={<h1>loading</h1>}><LazyProd /></Suspense>} />
        <Route path='/product' element={<Suspense fallback={<h1>loading</h1>}><LazyProduct /></Suspense>} />
        <Route path='/Login' element={<Suspense fallback={<h1>loading</h1>}><LazyLogin /></Suspense>} />
        <Route path='/home' element={<Suspense fallback={<h1>loading</h1>}><LazyHome /></Suspense>} />
        <Route path='/Logout' element={<Suspense fallback={<h1>loading</h1>}><LazyLogout /></Suspense>} />
        <Route path='/Register' element={<Suspense fallback={<h1>loading</h1>}><LazyRegister /></Suspense>} />
        <Route path='/product/upDate/:id' element={<Suspense fallback={<h1>loading</h1>}><LazyUpDate /></Suspense>} />
        <Route path='/component/compDetail/:id' element={<Suspense fallback={<h1>loading</h1>}><LazyDetail /></Suspense>} />
        <Route path='/component/compAddToCart/:id' element={<Suspense fallback={<h1>loading</h1>}><LazyAddToCart /></Suspense>} />
        <Route path='/compCart' element={<Suspense fallback={<h1>loading</h1>}><LazyCart /></Suspense>} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
