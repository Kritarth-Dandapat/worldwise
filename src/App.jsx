import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Homepage from "./Pages/Homepage";
import Pagenotfound from "./Pages/Pagenotfound";
import Login from "./pages/Login";
import AppLayout from "./Pages/AppLayout";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import City from "./Components/City";
import Form from "./Components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import {AuthProvider} from"./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";



function App(){
  

  return(
    <AuthProvider>
    <CitiesProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        
        <Route path="login" element={<Login/>}/>
        
        <Route path="product" element={<Product/>}/>
        <Route path="app" element={
          <ProtectedRoute>
            <AppLayout/>
          </ProtectedRoute>
        
        }>
          <Route index element={<Navigate replace to="cities"/>}/>
          <Route 
          path="cities" 
          element={<CityList/>}/>
           <Route path="cities/:id" element= {<City/>}/>
           <Route
          path="countries" 
          element={<CountryList/>}/>
          <Route 
          path="form" 
          element={<Form/>}/>
        </Route>
        <Route 
        path="*" 
        element={<Pagenotfound/>}/>
    </Routes>
    </BrowserRouter>
    </CitiesProvider>

</AuthProvider>
   

    
  )
}

export default App;