import React from 'react'
import ReactDOM from 'react-dom/client'
import {
createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import "./assets/styles/bootstrap.custom.css";
import App from './App.jsx'
import './index.css'
import "./assets/styles/index.css"
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen";
import CartScreeen from './screens/CartScreeen';
import LoginScreen from './screens/LoginScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreeen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
