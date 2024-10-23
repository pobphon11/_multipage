import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { HashRouter } from 'react-router-dom'
import {Route, Routes } from 'react-router-dom'
import { useEffect , useState } from 'react'

import Layout from './layouts/Layout/Layout'
import Home from './pages/Home/Home'
import Todo from './pages/Todo/Todo'
import Calculator from './pages/Calculator/Calculator'
import Components from './pages/Components/Components'
import Animation from './pages/Animation/Animation'
import Products from './pages/Products/Products'
import Carts from './pages/Carts/Carts'
import './App.css'
import { fetchProducts } from './data/products'
import Login from './pages/Login/Login'




function App() {
const [products, setProducts] = useState([])
const [carts, setCarts] = useState([])
const [token, setToken] = useState('')
const [role, setRole] = useState('')
useEffect(() => {
  setProducts(fetchProducts())
},[])
useEffect(() => {
  console.log(products),[products]
})

if (token === '') {
  
  return (
    (<Login setToken={setToken}  setRole={setRole}    />) 
  )
} else{

  return (
  
  
    <div className="app-container">
      <HashRouter>
        <Routes>
         
          <Route element={<Layout products={products} carts={carts} setToken={setToken} />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/components" element={<Components />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/products" element={<Products 
            products={products}
            carts={carts}
            setCarts={setCarts} />}
             />
            <Route path="/carts" element={<Carts 
            carts={carts}
            setCarts={setCarts}
            />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
}

export default App
